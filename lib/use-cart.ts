import React from 'react';
import { CartStateItem } from '../lib/get-cart-details';
import { useCartStore } from '@/shared/store/cart';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';


type ReturnProps = {
    totalAmount: number;
    items: CartStateItem[];
    loading: boolean;
    updateItemQuantity: (id: number, quantity: number) => void;
    removeCartItem: (id: number) => void;
    addCartItem: (values: CreateCartItemValues) => void;
}

export const useCart = () : ReturnProps => {
    const {totalAmount, fetchCartItems, items, updateItemQuantity, removeCartItem, loading, addCartItem} = useCartStore();
    
    React.useEffect(() => {
        fetchCartItems();
    }, []);


    return {
        totalAmount,
        items,
        updateItemQuantity,
        removeCartItem,
        loading,
        addCartItem,
    }
}