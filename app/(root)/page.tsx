import { Container, Filters, Title, TopBar, Stories } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared/products-group-list";
import { Suspense } from "react";
import { findSalads, GetSearchParams } from "@/lib/find-salads";



export default async function Home({searchParams} : {searchParams: GetSearchParams}) {
  const categories = await findSalads(searchParams);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все салаты" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar categories={categories.filter((category) => category.product.length > 0)}/>

      <Stories />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*фильтрация*/}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
            
          </div>
          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.product.length > 0 &&  (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.product}
                      />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
      
     
    </>
    
  );
}
