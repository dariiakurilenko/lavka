'use client'
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store/cart";
import React from "react";
import toast from "react-hot-toast";
import { ChooseSaladForm } from "./choose-salad-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
    product: ProductWithRelations;
    onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit}) => {
    const firstItem = product.items[0];
    const isSaladForm = Boolean(firstItem.size);
    const {addCartItem, loading} = useCartStore();

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;
            await addCartItem({
                productItemId: itemId,
                ingredients,
            });
            toast.success(`Успешно добавили ${product.name} в корзину`);
            _onSubmit?.();
        }   catch (err) {
        toast.error(`Не удалось добавить ${product.name} в корзину`);
        console.log(err)
        }
    }
    if (isSaladForm) {
        return (
            <ChooseSaladForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} onSubmit={onSubmit} loading={loading}/>
        );
    }
    return (
        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} onSubmit={onSubmit} price={firstItem.price} loading={loading}/>
                
    )
};