import { Categories, Container, Filters, ProductCard, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все салаты" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Салаты"
                categoryId={1}
                items={[
                  {
                  id: 1,
                  name: 'Оливье',
                  imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                  price: 178,
                  items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
              ]}
              />
              <ProductsGroupList 
                title="Закуски"
                categoryId={2}
                items={[
                  {
                  id: 1,
                  name: 'Оливье',
                  imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                  price: 178,
                  items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
              ]}
              />
              <ProductsGroupList 
                title="Десерты"
                categoryId={3}
                items={[
                  {
                  id: 1,
                  name: 'Оливье',
                  imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                  price: 178,
                  items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
                  {
                    id: 1,
                    name: 'Оливье',
                    imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2791769/b277d5b7-dbf9-4a51-b80d-bbd465262160/928x928-webp',
                    price: 178,
                    items: [{price: 178}]
                  },
              ]}
              />
            </div>
          </div>
        </div>
      </Container>
      
     
    </>
    
  );
}
