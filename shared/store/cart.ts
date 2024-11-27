import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/get-cart-details";
import { useCallback, useEffect } from "react";
import { CreateCartItemValues } from "../services/dto/cart.dto";


export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    /**Получение товаров из корзины */
    fetchCartItems: () => Promise<void>;

    /**Запрос на обновление количества товара */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /**Запрос на добавление товара в корзину */
    addCartItem: (values: CreateCartItemValues) => Promise<void>;

    /**Хапрос на удаление товара из корзины */
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.getCart();
            const cartDetails = getCartDetails(data);
            set(cartDetails);
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false});
        }
    },
    removeCartItem: async (id: number) => {
        try {
            set(state => ({loading: true, error: false, items: state.items.map((item) => (item.id === id? {...item, disabled: true} : item))}));
            const data = await Api.cart.removeCartItem(id);
            const cartDetails = getCartDetails(data);
            set(cartDetails);
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set(state => ({loading: false, items: state.items.map((item) => ({...item, disabled: false}))}));
        }
    },
    updateItemQuantity: async (id: number, quantity: number) => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.updateItemQuantity(id, quantity);
            const cartDetails = getCartDetails(data);
            set(cartDetails);
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false});
        }
    },
    addCartItem: async (values: CreateCartItemValues) => {
        try {
            console.log("Отправляем данные:", values);
            set({loading: true, error: false});
            const data = await Api.cart.addCartItem(values);
            const cartDetails = getCartDetails(data);
            set(cartDetails);
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false});
        }
    }
}));
