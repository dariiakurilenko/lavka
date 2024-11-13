import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className="mb-5 font-bold"/>

            {/*Верхние чекбоксы*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Хиты' value="1" />
                <FilterCheckbox text='Новинки' value="2"/>
            </div>

            {/*Фильтр по цене*/}
            <div className="mt-5 border-y border-y-neutral-200 py-6 pb-7">
                <p className="mb-3 font-bold">Цена от и до: </p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={100} max={1000} placeholder="1000" />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup 
                title='Ингредиенты'
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: "Помидоры",
                        value: "1",
                    },
                    {
                        text: 'Сыр',
                        value: '2',
                    },
                    {
                        text: 'Огурцы',
                        value: "3",
                    },
                    {
                        text: 'Перец',
                        value: "4",
                    },
                    {
                        text: 'Мясо',
                        value: "5",
                    },
                    {
                        text: 'Майонез',
                        value: "6",
                    },
                ]} 
                items={[
                    {
                        text: "Помидоры",
                        value: "1",
                    },
                    {
                        text: 'Сыр',
                        value: '2',
                    },
                    {
                        text: 'Огурцы',
                        value: "3",
                    },
                    {
                        text: 'Перец',
                        value: "4",
                    },
                    {
                        text: 'Мясо',
                        value: "5",
                    },
                    {
                        text: 'Майонез',
                        value: "6",
                    },
                    {
                        text: "Помидоры",
                        value: "1",
                    },
                    {
                        text: 'Сыр',
                        value: '2',
                    },
                    {
                        text: 'Огурцы',
                        value: "3",
                    },
                    {
                        text: 'Перец',
                        value: "4",
                    },
                    {
                        text: 'Мясо',
                        value: "5",
                    },
                    {
                        text: 'Майонез',
                        value: "6",
                    },{
                        text: "Помидоры",
                        value: "1",
                    },
                    {
                        text: 'Сыр',
                        value: '2',
                    },
                    {
                        text: 'Огурцы',
                        value: "3",
                    },
                    {
                        text: 'Перец',
                        value: "4",
                    },
                    {
                        text: 'Мясо',
                        value: "5",
                    },
                    {
                        text: 'Майонез',
                        value: "6",
                    },
                ]} 
            />
        </div>
    );
};