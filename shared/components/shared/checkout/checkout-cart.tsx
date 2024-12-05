import React from 'react';
import { WhiteBlock } from '../white-block';
import { CheckoutItem } from '../checkout-item';
import { getCartItemDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';
import { CheckoutItemSkeleton } from '../checkout-item-skeleton';

interface Props {
    items: CartStateItem[];
    onClickCountButton: (id: number, quantity: number, type: "plus" | "minus") => void;
    removeCartItem: (id: number) => void;
    loading: boolean;
    className?: string;
}

export const CheckoutCart: React.FC<Props> = ({ removeCartItem, onClickCountButton, items, loading, className }) => {
    return (
        <WhiteBlock title='1. Корзина' className={className}>
                    <div className="flex flex-col gap-8"> 
                        {
                            loading && [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
                        }
                    
                    {
                        !loading && items.length > 0 &&
                        items.map((item) => (
                            <CheckoutItem 
                                key={item.id}
                                id={item.id} 
                                imageUrl={item.imageUrl} 
                                details={item.saladSize ? getCartItemDetails(item?.saladSize, item.ingredients) : ''}
                                name={item.name} 
                                price={item.price} 
                                quantity={item.quantity} 
                                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}  
                                onClickRemove={() => removeCartItem(item.id)}       
                                disabled={item.disabled}   
                    />
                        ))
                        
                    }

                    </div>
                </WhiteBlock>
    )
}