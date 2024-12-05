import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-item-details";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";

interface Props {
    totalAmount: number;
    className?: string;
    loading?: boolean;
    submitting?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 150;

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount,loading, className }) => {
    const vatPrice = (totalAmount * VAT) / 100;
    return (
        <WhiteBlock className="p-6 sticky top-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xl">Итого:</span>
                        {
                            loading? <Skeleton  className="w-48 h-11 "/>: <span className="h-11 text-3xl font-extrabold">{totalAmount + DELIVERY_PRICE + vatPrice} руб.</span>
                        }
                    </div>

                    <CheckoutItemDetails title={
                        <>  
                            <div className="flex items-center">
                            <Package className="mr-2 text-gray-350" size={20}/>
                            Стоимость товаров:
                            </div>
                        </>
                    } value={ loading? <Skeleton  className="w-14 h-6 "/> : `${totalAmount} руб` }/>
                    <CheckoutItemDetails title={
                        <>  
                        <div className="flex items-center">
                        <Percent className="mr-2 text-gray-350" size={20}/>
                        Налоги
                        </div>
                    </>
                    } value={ loading? <Skeleton  className="w-14 h-6 "/> : `${vatPrice} руб`}/>
                    <CheckoutItemDetails title={
                        <>  
                        <div className="flex items-center">
                        <Truck className="mr-2 text-gray-350" size={20}/>
                        Доставка
                        </div>
                    </>
                    } value={ loading? <Skeleton  className="w-14 h-6 "/> : `${DELIVERY_PRICE} руб`}/>

                    <Button loading={loading} type='submit' className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
                        Перейти к оплате
                        <ArrowRight  className="w-5 ml-2"/>
                    </Button>
                </WhiteBlock>
    );
};













