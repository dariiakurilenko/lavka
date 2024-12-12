import { ChooseProductModal} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";


interface PageProps {
    params: { id: string };
  }

export default async function ProductModalPage({ params: { id } }: PageProps) {
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