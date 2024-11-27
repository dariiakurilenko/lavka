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
import { ProductForm } from "./product-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
    size: 200 | 400 | 600
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden", className)}>
                <ProductForm product={product} onSubmit={() => router.back()}/>
            </DialogContent>
        </Dialog>
    );
};