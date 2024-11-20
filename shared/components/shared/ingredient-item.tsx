import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export const IngredientItem: React.FC<Props> = ({ 
    className, 
    onClick,
    active,
    price,
    name,
    imageUrl
     }) => {
    return (
        <div className={cn('flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white mt-6', 
            {'border border-primary': active},
            className)} 
            onClick={onClick}>
                {active && <CircleCheck className='absolute top-2 right-2 text-primary'/>}
                <img width={110} height={110} src={imageUrl}/>
                <span className="text-sx mb-1">{name}</span>
                <span className="text-sx mb-1 font-bold">{price} руб</span>
        </div>
    );
};