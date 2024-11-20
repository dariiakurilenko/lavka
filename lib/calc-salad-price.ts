import { SaladSize } from "@/shared/constants/salad";
import { Ingredient, ProductItem } from "@prisma/client";


/**
 * Функция для подсчтета общей стоимости салата
 * @param size - размер выбранного салата
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 * @returns number - общую стоимость
 * 
 */

export const calcSaladPrice = (
    size:SaladSize, 
    items: ProductItem[], 
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,
    
    ) => {
    const saladPrice = items.find((item) => item.size === size)?.price || 0;

    const totalIngredientsPrice = ingredients.filter((ingredient) => selectedIngredients.
    has(ingredient.id)).reduce((acc, ingredient) => acc + ingredient.price, 0)

    return saladPrice + totalIngredientsPrice
}