'use client';
import React from "react";
import { Dialog } from "../ui";
import { cn } from "@/lib/utils";
import { DialogContent } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "./choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChooseSaladForm } from "./choose-salad-form";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    className?: string;
    size: 200 | 400 | 600
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const isSaladForm = Boolean(firstItem.size);
    const {addCartItem, loading} = useCartStore();

    const onAddProduct = () => {
        addCartItem({
            productItemId: firstItem.id,
        });
    };
    const onAddSalad = async (productItemId: number, ingredients:number[]) => {
        try{
            await addCartItem({
                productItemId,
                ingredients
            });
            toast.success('Салат добавлен в корзину');
        }catch(e) {
            toast.error('Не удалось добавить салат в корзину');
            console.error(e)
        }
    };

    
    
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden", className)}>
                {
                    isSaladForm ? (
                        <ChooseSaladForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} onSubmit={onAddSalad} loading={loading}/>
                    ) : <ChooseProductForm imageUrl={product.imageUrl} name={product.name} onSubmit={onAddProduct} price={firstItem.price} loading={loading}/>
                }
            </DialogContent>
        </Dialog>
    );
};