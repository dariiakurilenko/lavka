'use client';
import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useRouter} from "next/navigation";
import { useQueryFilters, useIngredients, useFilters } from "@/shared/hooks";


interface Props {
    className?: string;
}





export const Filters: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const {ingredients, loading} = useIngredients();
    const filters = useFilters();

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    }

    useQueryFilters(filters);
    
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className="mb-5 font-bold"/>

           {/*Верхние чекбоксы*/}
            <CheckboxFiltersGroup 
                title='Размер'
                name='sizes'
                className="mb-5"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
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
                    <Input type="number" placeholder="0" min={0} max={1000}  value={String(filters.prices.priceFrom)}
                        onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input type="number" min={100} max={1000} placeholder="1000" value={String(filters.prices.priceTo)}
                        onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[
                    filters.prices.priceFrom || 0,
                    filters.prices.priceTo || 1000
                ]} 
                onValueChange={updatePrices}/>
            </div>

            <CheckboxFiltersGroup 
                title='Ингредиенты'
                name='ingredients'
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)} 
                items={items} 
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected = {filters.selectedIngredients}
            />

            
        </div>
    );
};