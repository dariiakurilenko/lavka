
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
    saladSize: number | null,
    ingredients: CartStateItem['ingredients'],
): string => {
    const details = [];
    if (saladSize) {
      details.push(`${saladSize} грамм`)
    }
  
    if (ingredients){
      details.push(...ingredients.map((ingredients) => ingredients.name))
    }

    return details.join(', ');
}