import { ChooseProductModal, Container, ProductImage, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";

export default async function ProductModalPage({params: {id}}: {params: {id : string}}) {
   const product = await prisma.product.findFirst({
    where: {
        id: Number(id),
    },
    include: {
        ingredients: true,
        items: true,
    }
   });

   if (!product){
    return notFound();
   }

   return (
    <ChooseProductModal product={product} size={200} />
   )
}