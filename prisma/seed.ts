
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import bcrypt from 'bcrypt';

async function up(){
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User1 test',
                email: "user1@mail.com",
                password: bcrypt.hashSync("11111", 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin1 test',
                email: "admin1@mail.com",
                password: bcrypt.hashSync("11111", 10),
                verified: new Date(),
                role: 'ADMIN',
            },

        ]
    });

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products,
    })

    const salad1 = await prisma.product.create({
        data: {
            name: "Салат с копчёной курицей, ананасом и сыром",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2750890/2e5ae45d-73b0-4874-b5f4-fc3860b7a33f/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 3),
            },
        }
    });

    const salad2 = await prisma.product.create({
        data: {
            name: "Салат оливье с курицей",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2805921/e767222a-4c66-4d21-8d54-3bc2c5aa82a5/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        }
    });

    const salad3 = await prisma.product.create({
        data: {
            name: "Салат с тунцом, свежими овощами и медово-горчичной заправкой",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2998515/b3ccc3bf-620c-452e-a3be-47650400e9c1/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 6),
            },
        }
    });

    await prisma.productItem.createMany({
        data: [
            //Салат с копченой курицей
            {
                productId: salad1.id,
                price: 199,
                size: 200,
            },
            {
                productId: salad1.id,
                price: 299,
                size: 400,
            },
            {
                productId: salad1.id,
                price: 399,
                size: 600,
            },
            {
                productId: salad1.id,
                price: 499,
                size: 1000,
            },
            //оливье
            {
                productId: salad2.id,
                price: 299,
                size: 200,
            },
            {
                productId: salad2.id,
                price: 399,
                size: 400,
            },
            {
                productId: salad2.id,
                price: 499,
                size: 600,
            },
            {
                productId: salad2.id,
                price: 599,
                size: 1000,
            },
            //Салат с тунцом
            {
                productId: salad3.id,
                price: 359,
                size: 200,
            },
            {
                productId: salad3.id,
                price: 459,
                size: 400,
            },
            {
                productId: salad3.id,
                price: 559,
                size: 600,
            },
            {
                productId: salad3.id,
                price: 659,
                size: 1000,
            },

            //остальные продукты

            {
                productId: 1,
                price: 199
            },
            {
                productId: 2,
                price: 299
            },
            {
                productId: 3,
                price: 259
            },
            {
                productId: 4,
                price: 599
            },
            {
                productId: 5,
                price: 399
            },
            {
                productId: 6,
                price: 399
            },
            {
                productId: 7,
                price: 199
            },
            {
                productId: 8,
                price: 199
            },
            {
                productId: 9,
                price: 199
            },
        ]
    });

    await prisma.story.createMany({
        data: [
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
          },
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
          },
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
          },
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
          },
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
          },
          {
            previewImageUrl:
              'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
          },
        ],
      });

      await prisma.storyItem.createMany({
        data: [
          {
            storyId: 1,
            sourceUrl:
              'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
          },
          {
            storyId: 1,
            sourceUrl:
              'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
          },
          {
            storyId: 1,
            sourceUrl:
              'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
          },
          {
            storyId: 1,
            sourceUrl:
              'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
          },
          {
            storyId: 1,
            sourceUrl:
              'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
          },
        ],
      });
    

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22222'
            },

        ]
    });

    await prisma.cartItem.create({
        data: 
            {
                productItemId: 1,
                cartId: 1,
                quantity: 2,
                ingredients: {
                    connect: [{id: 1}, {id: 2}, {id: 3}]
                },
            },
        
    });

}

async function down(){
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main(){
    try {
        await down();
        await up();
    } catch(e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });