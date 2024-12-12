'use client'
import { useCart } from "@/lib";
import { CheckoutSidebar, Container, Title } from "@/shared/components/shared";
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from "@/shared/components/shared/checkout";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import React from "react";
import { useSession } from "next-auth/react";
import { Api } from "@/shared/services/api-client";




export default function CheckoutPage(){
    const {totalAmount, items, updateItemQuantity, removeCartItem, loading} = useCart();
    const {data: session} = useSession();
    const [submitting, setSubmitting] = React.useState(false);

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        }
    });

    React.useEffect(() => {
        async function fetchUserInfo(){
            const data = await Api.auth.getMe();
            const [firstName, lastName] = data.fullName.split(' ');

            form.setValue('firstName', firstName);
            form.setValue('lastName', lastName);
            form.setValue('email', data.email);
        }
        if (session){
            fetchUserInfo();
        }
    }, [session]);

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            setSubmitting(true);
            const url = await createOrder(data)

            toast.success('Заказ успешно оформлен! 📝 Переход на оплату... ', {
                icon: '✅',
              });

            if (url) {
                location.href = url;
            }

        }catch (err){
            console.log(err);
            setSubmitting(false);
            toast.error('❌ Не удалось создать заказ')
        }
    }
    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus'? quantity + 1: quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    
    return (
        <Container className="mt-10">
            <Title  text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

            <FormProvider {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">

                    {/**Левая часть!!! */}
                    <div className="flex flex-col gap-10 flex-1 mb-20">

                    <CheckoutCart loading={loading} onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} items={items}/>

                <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

                    <CheckoutAddressForm  className={loading ? 'opacity-40 pointer-events-none' : ''}/>
                    </div>

                    {/**Правая часть!!! */}
                    <div className="w-[450px]">
                        <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting}/>
                    </div>

                    </div>
            </form>
            </FormProvider>
        </Container>
    )
}

