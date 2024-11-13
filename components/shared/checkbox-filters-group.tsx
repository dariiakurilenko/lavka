'use client'
import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;
interface Props {
    title: string;
    items: Item[]; //сами чекбоксы
    defaultItems: Item[]; //айтемсы по умолчанию
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    { 
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
    }
) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const onSetSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }
    const list = showAll? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit);
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            {
                showAll && (
                    <div className="mb-5">
                        <Input onChange={onSetSearchInput} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
                    </div>
                )
            }
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index} 
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                        />

                ))}
            </div>
            {items.length > limit && (
                <div className={showAll? 'border-t border-t-neutral-100 mt-4': ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll? 'Скрыть' : 'Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};