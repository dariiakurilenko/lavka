
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

    const salad4 = await prisma.product.create({
        data: {
            name: "Салат греческий",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2791769/80d4f662-d493-470c-b0fd-70a5d49a41c1/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(1, 7),
            },
        }
    });

    const salad5 = await prisma.product.create({
        data: {
            name: "Салат Цезарь с куриной грудкой и фирменным соусом",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2756334/50a98bfb-650c-4bf5-829e-43d19dc07199/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(12, 15),
            },
        }
    });


    const salad6 = await prisma.product.create({
        data: {
            name: "Салат с курицей, хрустящим луком и фирменным соусом",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/edaebfec-4da7-44f7-9ae2-1ccf059e41d4/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 8),
            },
        }
    });

    const salad7 = await prisma.product.create({
        data: {
            name: "Салат с запечённой тыквой, творожным сыром и руколой",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(9, 14),
            },
        }
    });

    const salad8 = await prisma.product.create({
        data: {
            name: "Салат с копчёной грудкой и сельдереем",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/e959a9c1-5d8f-4ef8-8dea-aefad4ab24de/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(3, 8),
            },
        }
    });

    const salad9 = await prisma.product.create({
        data: {
            name: "Салат Мимоза",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2783132/f88431b0-d700-4a3a-96bd-72c0c0f9159a/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 15),
            },
        }
    });

    const salad10 = await prisma.product.create({
        data: {
            name: "Зелёный салат с адыгейским сыром и яйцом",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/761180e3-6283-452f-acc1-3dc58bb9f701/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(7, 13),
            },
        }
    });

    const salad11 = await prisma.product.create({
        data: {
            name: "Салат с капустой, сладким перцем и огурцом ",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2756334/587a874a-6ebd-4a8c-b92f-3d58cf24f6c6/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(3, 8),
            },
        }
    });

    const salad12 = await prisma.product.create({
        data: {
            name: "Салат по-харбински с томлёной говядиной",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/a48cb21e-983a-4975-ba78-80f298101a4d/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 10),
            },
        }
    });

    const salad13 = await prisma.product.create({
        data: {
            name: "Салат с курицей мандарином и медовой заправкой",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2805921/f3f0ec12-c2cc-4b70-8f63-e400ae529b1e/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 9),
            },
        }
    });

    const salad14 = await prisma.product.create({
        data: {
            name: "Салат Филадельфия",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2888787/64ae7b0f-5a98-461c-8d01-cff7e2e88032/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(2, 7),
            },
        }
    });

    const salad15 = await prisma.product.create({
        data: {
            name: "Салат Гранатовый с курицей",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2750890/b6d7dccc-2543-4b5d-8d10-04f33be26dce/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 4),
            },
        }
    });

    const salad16 = await prisma.product.create({
        data: {
            name: "Салат Винегрет",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2756334/77b05965-4ed4-413a-bb19-1e6dc28348ce/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(6, 14),
            },
        }
    });

    const salad17 = await prisma.product.create({
        data: {
            name: "Поке креветка-тунец-мандарин",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2783132/fd753f92-5bbc-4f19-a7c1-d797ad00d8ed/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(1, 7),
            },
        }
    });

    const salad18 = await prisma.product.create({
        data: {
            name: "Салат с слабосолёным лососем и цитрусовым дрессингом",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2783132/741e265e-549e-46c9-9de9-c8638fa4b08a/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(4, 12),
            },
        }
    });
    const salad19 = await prisma.product.create({
        data: {
            name: "Салат с персиком, копчёной курицей и кешью",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2998515/86be0548-f3df-4dd5-ad33-c92b4d46d636/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(4, 10),
            },
        }
    });
    const salad20 = await prisma.product.create({
        data: {
            name: "Поке с лососем",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2791769/07b138b9-6712-420b-a5ce-15fb7d3018e7/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(3, 7),
            },
        }
    });

    const salad21 = await prisma.product.create({
        data: {
            name: "Поке с тунцом",
            imageUrl:
                'https://yastatic.net/avatars/get-grocery-goods/2783132/3a27f651-383e-4bf0-96cf-bda7e9e9b7b4/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(2, 8),
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

            //Салат греческий
            {
                productId: salad4.id,
                price: 159,
                size: 200,
            },
            {
                productId: salad4.id,
                price: 259,
                size: 400,
            },
            {
                productId: salad4.id,
                price: 359,
                size: 600,
            },
            {
                productId: salad4.id,
                price: 399,
                size: 1000,
            },


            //Салат цезарь
            {
                productId: salad5.id,
                price: 229,
                size: 200,
            },
            {
                productId: salad5.id,
                price: 299,
                size: 400,
            },
            {
                productId: salad5.id,
                price: 349,
                size: 600,
            },
            {
                productId: salad5.id,
                price: 599,
                size: 1000,
            },

            //Салат с курицей, хрустящим луком и фирменным соусом
            {
                productId: salad6.id,
                price: 219,
                size: 200,
            },
            {
                productId: salad6.id,
                price: 279,
                size: 400,
            },
            {
                productId: salad6.id,
                price: 319,
                size: 600,
            },
            {
                productId: salad6.id,
                price: 379,
                size: 1000,
            },

            //Салат с запеченной тыквой
            {
                productId: salad7.id,
                price: 209,
                size: 200,
            },
            {
                productId: salad7.id,
                price: 289,
                size: 400,
            },
            {
                productId: salad7.id,
                price: 329,
                size: 600,
            },
            {
                productId: salad7.id,
                price: 379,
                size: 1000,
            },

            //Салат с копчёной грудкой и сельдереем
            {
                productId: salad8.id,
                price: 189,
                size: 200,
            },
            {
                productId: salad8.id,
                price: 249,
                size: 400,
            },
            {
                productId: salad8.id,
                price: 299,
                size: 600,
            },
            {
                productId: salad8.id,
                price: 319,
                size: 1000,
            },


            //Мимоза
            {
                productId: salad9.id,
                price: 239,
                size: 200,
            },
            {
                productId: salad9.id,
                price: 299,
                size: 400,
            },
            {
                productId: salad9.id,
                price: 339,
                size: 600,
            },
            {
                productId: salad9.id,
                price: 409,
                size: 1000,
            },


            //Зеленый салат
            {
                productId: salad10.id,
                price: 139,
                size: 200,
            },
            {
                productId: salad10.id,
                price: 189,
                size: 400,
            },
            {
                productId: salad10.id,
                price: 219,
                size: 600,
            },
            {
                productId: salad10.id,
                price: 289,
                size: 1000,
            },

            //Салат с капустой
            {
                productId: salad11.id,
                price: 199,
                size: 200,
            },
            {
                productId: salad11.id,
                price: 259,
                size: 400,
            },
            {
                productId: salad11.id,
                price: 299,
                size: 600,
            },
            {
                productId: salad11.id,
                price: 309,
                size: 1000,
            },

            //Салат по-харбински
            {
                productId: salad12.id,
                price: 299,
                size: 200,
            },
            {
                productId: salad12.id,
                price: 399,
                size: 400,
            },
            {
                productId: salad12.id,
                price: 499,
                size: 600,
            },
            {
                productId: salad12.id,
                price: 599,
                size: 1000,
            },

            //Салат с курицей мандарином и медовой заправкой
            {
                productId: salad13.id,
                price: 179,
                size: 200,
            },
            {
                productId: salad13.id,
                price: 209,
                size: 400,
            },
            {
                productId: salad13.id,
                price: 249,
                size: 600,
            },
            {
                productId: salad13.id,
                price: 299,
                size: 1000,
            },

            //Салат филадельфия
            {
                productId: salad14.id,
                price: 209,
                size: 200,
            },
            {
                productId: salad14.id,
                price: 299,
                size: 400,
            },
            {
                productId: salad14.id,
                price: 309,
                size: 600,
            },
            {
                productId: salad14.id,
                price: 399,
                size: 1000,
            },

            //Салат Гранатовый с курицей
            {
                productId: salad15.id,
                price: 219,
                size: 200,
            },
            {
                productId: salad15.id,
                price: 259,
                size: 400,
            },
            {
                productId: salad15.id,
                price: 299,
                size: 600,
            },
            {
                productId: salad15.id,
                price: 329,
                size: 1000,
            },

            //Винегрет
            {
                productId: salad16.id,
                price: 189,
                size: 200,
            },
            {
                productId: salad16.id,
                price: 219,
                size: 400,
            },
            {
                productId: salad16.id,
                price: 279,
                size: 600,
            },
            {
                productId: salad16.id,
                price: 299,
                size: 1000,
            },

            //Поке креветка-тунец-мандарин
            {
                productId: salad17.id,
                price: 359,
                size: 200,
            },
            {
                productId: salad17.id,
                price: 459,
                size: 400,
            },
            {
                productId: salad17.id,
                price: 559,
                size: 600,
            },
            {
                productId: salad17.id,
                price: 659,
                size: 1000,
            },

            //Салат с лососем
            {
                productId: salad18.id,
                price: 299,
                size: 200,
            },
            {
                productId: salad18.id,
                price: 369,
                size: 400,
            },
            {
                productId: salad18.id,
                price: 409,
                size: 600,
            },
            {
                productId: salad18.id,
                price: 499,
                size: 1000,
            },

            //Салат с персиком, копчёной курицей и кешью
            {
                productId: salad19.id,
                price: 199,
                size: 200,
            },
            {
                productId: salad19.id,
                price: 299,
                size: 400,
            },
            {
                productId: salad19.id,
                price: 399,
                size: 600,
            },
            {
                productId: salad19.id,
                price: 499,
                size: 1000,
            },

            //Поке с лососем
            {
                productId: salad20.id,
                price: 399,
                size: 200,
            },
            {
                productId: salad20.id,
                price: 499,
                size: 400,
            },
            {
                productId: salad20.id,
                price: 599,
                size: 600,
            },
            {
                productId: salad20.id,
                price: 899,
                size: 1000,
            },

            //"Поке с тунцом
            {
                productId: salad21.id,
                price: 299,
                size: 200,
            },
            {
                productId: salad21.id,
                price: 399,
                size: 400,
            },
            {
                productId: salad21.id,
                price: 499,
                size: 600,
            },
            {
                productId: salad21.id,
                price: 699,
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
                price: 239
            },
            {
                productId: 5,
                price: 219
            },
            {
                productId: 6,
                price: 299
            },
            {
                productId: 7,
                price: 249
            },
            {
                productId: 8,
                price: 319
            },
            {
                productId: 9,
                price: 299
            },
            {
                productId: 10,
                price: 499
            },
            {
                productId: 11,
                price: 399
            },
            {
                productId: 12,
                price: 369
            },
            {
                productId: 13,
                price: 249
            },
            {
                productId: 14,
                price: 459
            },
            {
                productId: 15,
                price: 209
            },
            {
                productId: 16,
                price: 199
            },
            {
                productId: 17,
                price: 149
            },
            {
                productId: 18,
                price: 219
            },
            {
                productId: 19,
                price: 309
            },
            {
                productId: 20,
                price: 309
            },
            {
                productId: 21,
                price: 179
            },
            {
                productId: 22,
                price: 179
            },
            {
                productId: 23,
                price: 189
            },
            {
                productId: 24,
                price: 159
            },
            {
                productId: 25,
                price: 309
            },
            {
                productId: 26,
                price: 109
            },
            {
                productId: 27,
                price: 109
            },
            {
                productId: 28,
                price: 109
            },
            {
                productId: 29,
                price: 109
            },
            {
                productId: 30,
                price: 109
            },
            {
                productId: 31,
                price: 109
            },
            {
                productId: 32,
                price: 99
            },
            {
                productId: 33,
                price: 99
            },
            {
                productId: 34,
                price: 159
            },
            {
                productId: 35,
                price: 159
            },
            {
                productId: 36,
                price: 159
            },
            {
                productId: 37,
                price: 159
            },
            {
                productId: 38,
                price: 159
            },
            {
                productId: 39,
                price: 159
            },
            {
                productId: 40,
                price: 139
            },
            {
                productId: 41,
                price: 39
            },
            {
                productId: 42,
                price: 39
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
    await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
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