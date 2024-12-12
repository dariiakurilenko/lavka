
import { CartDTO } from "@/shared/services/dto/cart.dto";

import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    saladSize: number | null;
    price: number;
    disabled?: boolean;
    ingredients: Array<{name: string; price: number}>;
};

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl:  item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        disabled: false,
        saladSize: item.productItem.size,
        ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
        })),

    })) as CartStateItem[];
    return {
        items,
        totalAmount: data.totalAmount,

    }
};