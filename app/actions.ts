'use server';

import { createPayment, sendEmail } from "@/lib";
import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema";
import { PayOrderTemplate } from "@/shared/components/shared/email-templates/pay-order";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";


export async function createOrder(data: CheckoutFormValues){
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get('cartToken')?.value;

        if (!cartToken) {
            throw new Error('Cart token not found');
        }

        //Находим корзину по токену

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingredients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            },
        });

        //Если корзина не найдена возвращаем ошибку

        if (!userCart){
            throw new Error('Cart is not found');
        }

        //Если корзина пустая возвращаем ошибку

        if (userCart?.totalAmount === 0){
            throw new Error('Cart is empty');
        }

        //Создаем заказ
        const order = await prisma.order.create({
            data: {
                token: cartToken,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                fullName: data.firstName + ' ' + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                items: JSON.stringify(userCart.items),
            }
        });

        //Очищаем totalAmount корзины
        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            }
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            }
        });

        const paymentData = await createPayment({
            amount: order.totalAmount,
            orderId: order.id,
            description: 'Оплата заказа №' + order.id
        });

        if (!paymentData){
            throw new Error('Payment data not found');
        }

        await prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                paymentId: paymentData.id
            }
        })

        const paymentUrl = paymentData.confirmation.confirmation_url


        await sendEmail(data.email, 'Lavka | Оплатите заказ №' + order.id, PayOrderTemplate({
            orderId: order.id,
            totalAmount: order.totalAmount,
            paymentUrl,
        }));
        return paymentUrl;
        
    } catch (err) {
        console.log('[CreateOrder] Server error', err);
    }

    
}
