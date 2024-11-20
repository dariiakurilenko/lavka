import { Container, SaladImage, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";

export default async function ProductPage({params: {id}}: {params: {id : string}}) {
    const product =  await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product){
        return notFound();
    }
    return <Container className="flex flex-col my-10">
        <div className="flex flex-1"> 
            <SaladImage imageUrl={product.imageUrl} className='' size={40}/>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={product.name} size='md' className="font-extrabold mb-1"  />
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni, nisi inventore sunt cupiditate accusamus veniam sequi necessitatibus, nulla, deserunt aliquam qui aliquid illum. Numquam libero non corrupti quidem cupiditate.</p>
                <GroupVariants value='2' items={[
                    {
                    name: 'S',
                    value: "1",
                    },
                    {
                        name: 'M',
                        value: "2",
                    },
                    {
                        name: 'L',
                        value: "3",
                        disabled : true,
                    },
                    {
                        name: 'XL',
                        value: "4",
                    },
                ]} />
            </div>
        </div>
    </Container>
}