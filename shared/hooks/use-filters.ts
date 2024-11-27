import { useRouter, useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface QueryFilters extends PriceProps{
    sizes: string,
    ingredients: string,
}
interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export interface Filters {
    sizes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters{
    setPrices: (name: keyof PriceProps, value: number) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps =>{
    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    /* Фильтр ингредиетов */
    const [selectedIngredients, { toggle: toggleIngredients}] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(",")));

   
    /* Фильтр размеров */
    const [sizes, { toggle: toggleSizes}] = useSet(
        new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(",") : [])
    );


    /* Фильтр стоимости */
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined, 
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({
            ...prev,
            [name]: value,

        }));
    }
    const filters = {
        ...prices,
        sizes: Array.from(sizes),
        ingredients: Array.from(selectedIngredients),
    }

    return React.useMemo(
        () => ({
        sizes,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
    }),
    [sizes, selectedIngredients, prices]
);
}