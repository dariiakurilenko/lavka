import { updateCartTotalAmount } from "@/lib/update-cart-total-amount";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params} : { params: { id: string}}){
    try{
        const id = Number(params.id);
        const data = (await req.json()) as {quantity: number};

        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({error: 'cart token not found'})
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id,
            },
        });

        if (!cartItem){
            return NextResponse.json({error: 'cart item not found'})
        }

        await prisma.cartItem.update({
            where: {
                id,
            },
            data:{
                quantity: data.quantity,
            },
        });

        const updatedUserCart = await updateCartTotalAmount(token);

        return NextResponse.json(updatedUserCart)

        
    } catch(error) {
        console.log('[CART_PATCH] server error',error)
        return NextResponse.json({message: 'Не удалось обновить корзину'}, {status: 500});
    }
}

export async function DELETE(req: NextRequest, { params } : {params: {id: string}}){
    try{
        const id = Number(params.id);
        const token = req.cookies.get('cartToken')?.value;

        if (!token){
            return NextResponse.json({error: 'cart token not found'})
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id: Number(params.id),
            },
        });

        if (!cartItem){
            return NextResponse.json({error: 'cart item not found'})
        }

        await prisma.cartItem.delete({
            where: {
                id: Number(params.id),
            },
        });

        const updatedUserCart = await updateCartTotalAmount(token);

        return NextResponse.json(updatedUserCart)


        
    }catch(error){
        console.log('[CART_DELETE] server error',error)
        return NextResponse.json({message: 'Не удалось удалить корзину'}, {status: 500});
    }
}