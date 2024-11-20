export const mapSaladSize = {
    200: 'S',
    400: 'M',
    600: 'L',
    1000: 'XL',
} as const;

export const saladSizes = Object.entries(mapSaladSize).map(([value, name]) => ({
    name,
    value
}));

export type SaladSize = keyof typeof mapSaladSize;