import { Categories, Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все салаты" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar />
      <div style={{height:"1000px"}}></div>
      
     
    </>
    
  );
}
