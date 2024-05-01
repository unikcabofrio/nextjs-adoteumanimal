'use client'

import BarNavegacao from "@/view/barNavagacao";
import ViewPets from "@/view/viewPets";

export default function Home() {


  return (
    <>
      <BarNavegacao />
      <main className="container">
        <ViewPets/>
      </main>
    </>

  );
}
