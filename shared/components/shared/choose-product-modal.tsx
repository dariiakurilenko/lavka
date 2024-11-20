'use client';
import React from "react";
import { Dialog } from "../ui";
import { cn } from "@/lib/utils";
import { DialogContent } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "./choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChooseSaladForm } from "./choose-salad-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
    size: 200 | 400 | 600
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();
    const isSaladForm = Boolean(product.items[0].size);
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden", className)}>
                {
                    isSaladForm ? (
                        <ChooseSaladForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items}/>
                    ) : <ChooseProductForm imageUrl={product.imageUrl} name={product.name}  />
                }
            </DialogContent>
        </Dialog>
    );
};