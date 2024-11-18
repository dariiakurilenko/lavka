export const categories = [
    {
        name: 'Салаты',
    },
    {
        name: 'Закуски',
    },
    {
        name: 'Десерты',
    },
    {
        name: 'Напитки',
    },
];

export const ingredients = [
    {
        name: 'Курица',
        price: 179,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2791769/7b650da5-4b1b-4e10-bd52-47b4764ec60b/928x928-webp"
    },
    {
        name: 'Ананас',
        price: 79,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2888787/a81ab1eb-2cfb-4855-9761-72014f048393/928x928-webp"
    },
    {
        name: 'Сыр',
        price: 79,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2998515/8a4e95c7-6246-4b8c-9869-2d0b33aa85a7/928x928-webp"
    },
    {
        name: 'Горошек',
        price: 59,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2783132/dbb27298-b6a0-4a15-bfc1-3a9574ca684d/928x928-webp"
    },
    {
        name: 'Кукуруза',
        price: 59,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2783132/dbb27298-b6a0-4a15-bfc1-3a9574ca684d/928x928-webp"
    },
    {
        name: 'Крабовые палочки',
        price: 159,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2805921/03785545-e4e9-4c6a-bff2-450963046599/928x928-webp"
    },
    {
        name: 'Шампиньоны',
        price: 129,
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2805921/5ff3a2b7-8c91-4343-9729-e27f5e35ebca/928x928-webp"
    },
].map((obj, index) => ({ id: index + 1, ...obj}));

export const products = [
    {
        name: "Стрипсы куриные с сырным соусом",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2750890/c13fdc7e-2ae9-49f5-97b5-9bf751c7d929/928x928-webp",
        categoryId: 2,
    },
    {
        name: "Попкорн из креветок",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2888787/099fc973-e9a1-4cce-9691-de707bfc961d/928x928-webp",
        categoryId: 2,
    },
    {
        name: "Сэндвич с индейкой, сыром чеддер, соусами монре и айоли Mates",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2783132/94c3c717-66ed-4076-be75-1c1d2bdca3ff/928x928-webp",
        categoryId: 2,
    },
    {
        name: "Торт блинный",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2750890/f9c91284-577d-44b7-b20d-5e50871cee5c/928x928-webp",
        categoryId: 3,
    },
    {
        name: "Десерт морковный с сырным кремом",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2756334/1bf8156d-49f3-4570-8784-dec90fae3949/928x928-webp",
        categoryId: 3,
    },
    {
        name: "Чизкейкс с карамелью",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2805921/3bfb497f-16e0-4538-a14d-c9e484ef60f4/928x928-webp",
        categoryId: 3,
    },
    {
        name: "Раф",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2750890/e4b679f8-b083-4b62-976b-0a1da2559477/928x928-webp",
        categoryId: 4,
    },
    {
        name: "Латте имбирный пряник",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2805921/220b232f-035b-470c-8b43-c8c778e2c352/928x928-webp",
        categoryId: 4,
    },
    {
        name: "Колд брю лимон",
        imageUrl: "https://yastatic.net/avatars/get-grocery-goods/2998515/afd59e2b-f4e2-4877-9169-98ea48698c7b/928x928-webp",
        categoryId: 4,
    },
]
