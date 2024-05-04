
import BarNavegacao from "@/view/barNavagacao";
import Adote from "@/view/adote";
import Header from "@/view/header";
import SaibaMais from "@/view/saibaMais";
import Sobre from "@/view/sobre";
import FAQ from "@/view/faq";

export default function Home() {
  const date = new Date()
  return (
    <>
      <BarNavegacao />
      <main className="container notScroll">
        <Header />
        <Adote />
        <SaibaMais />
        <Sobre />
        <FAQ />
        <footer>
          <p>Site - NextJs - Desenvolvido por <a href="https://github.com/unikcabofrio" target="_blank">Unik Cabo Frio</a> - {date.getFullYear()}</p>
        </footer>
      </main>
    </>

  );
}
