import { cn } from "@/lib/utils";
import React from "react";
import { SaladImage } from "./salad-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { SaladSize, saladSizes } from "@/shared/constants/salad";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import { calcSaladPrice } from "@/lib/calc-salad-price";



interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    onSubmit: (itemId: number, ingredients: number[]) => void;
    loading?: boolean;
}

export const ChooseSaladForm: React.FC<Props> = ({ 
    name,
    items,
    imageUrl,
    ingredients,
    onSubmit,
    className,
    loading,
}) => {

    /**
     * Форма выбора салата
     */
    const [size, setSize] = React.useState<SaladSize>(200);
    const [selectedIngredients, {toggle: addIngredients}] = useSet(new Set<number>([]));

    const currentItemId = items.find((item) => item.size === size)?.id
    
    const totalPrice = calcSaladPrice(
        size,
        items,
        ingredients,
        selectedIngredients,
    );

    const handleClickAdd = () => {
        if (currentItemId){
            console.log("Добавление в корзину:", currentItemId, Array.from(selectedIngredients));
            onSubmit(currentItemId, Array.from(selectedIngredients));
        }
        
    };


    const textDetails = `${size} грамм самого вкусного в мире салата`;

   
    return (
        <div className={cn('flex flex-1', className)}>
           <SaladImage imageUrl={imageUrl} size={size} />
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetails}</p>
                <div className="mt-7">
                <GroupVariants items={saladSizes} value={String(size)} onClick={value => setSize(Number(value) as SaladSize)}/>
                </div>
                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
                <div className="grid grid-cols-3 gap-3">
                    {
                        ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => addIngredients(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))
                    }
                </div>
                </div>
                <Button 
                    loading={loading}
                    onClick={handleClickAdd}
                    className='h-[55px] px-10 my-10 text-base rounded-[18px] w-full'>
                    Добавить в корзину за {totalPrice} руб
                </Button>
            </div>
        </div>
    );
};