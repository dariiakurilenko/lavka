import { cn } from "@/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChooseSaladForm: React.FC<Props> = ({ 
    name,
    items,
    imageUrl,
    ingredients,
    onClickAdd,
    className 
}) => {
    const textDetails = '200 грамм';
    const totalPrice = 350;
    return (
        <div className={cn('flex flex-1', className)}>
           <ProductImage imageUrl={imageUrl} size={0} />
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetails}</p>
                <Button
                    className='h-[55px] px-10 my-10 text-base rounded-[18px] w-full'>
                    Добавить в корзину за {totalPrice} руб
                </Button>
            </div>
        </div>
    );
};