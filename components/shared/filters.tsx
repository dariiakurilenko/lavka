'use client';
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from 'qs'
import { useRouter, useSearchParams } from "next/navigation";


interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps{
    sizes: string,
    ingredients: string,
}

export const Filters: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients(searchParams.get('ingredients')?.split(","));

    const [sizes, { toggle: toggleSizes}] = useSet(new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(",") : []));
    const [prices, setPrice] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined, 
    });

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,

        });
    }

    

    React.useEffect(() => {
        const filters = {
            ...prices,
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients),
        };

        const query = qs.stringify(filters,{
            arrayFormat: 'comma',
        });

        router.push(`?${query}`, {
            scroll: false
        });
    }, [prices, sizes, selectedIngredients, router])
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className="mb-5 font-bold"/>

           {/*Верхние чекбоксы*/}
            <CheckboxFiltersGroup 
                title='Размер'
                name='sizes'
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '200 грамм', value: '200'},
                    { text: '400 грамм', value: '400'},
                    { text: '600 грамм', value: '600'},

                ]}
            />

            {/*Фильтр по цене*/}
            <div className="mt-5 border-y border-y-neutral-200 py-6 pb-7">
                <p className="mb-3 font-bold">Цена от и до: </p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000}  value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input type="number" min={100} max={1000} placeholder="1000" value={String(prices.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[
                    prices.priceFrom || 0,
                    prices.priceTo || 1000
                ]} 
                onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}/>
            </div>

            <CheckboxFiltersGroup 
                title='Ингредиенты'
                name='ingredients'
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)} 
                items={items} 
                loading={loading}
                onClickCheckbox={onAddId}
                selected = {selectedIngredients}
            />

            
        </div>
    );
};