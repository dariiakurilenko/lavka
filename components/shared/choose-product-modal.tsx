'use client';
import React from "react";
import { Dialog } from "../ui";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { DialogContent } from "../ui/dialog";
import { Title } from "./title";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "./choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";

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
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                {
                    isSaladForm ? (
                        'SaladForm'
                    ) : <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
                }
            </DialogContent>
        </Dialog>
    );
};