'use client'

import { useState, useEffect } from "react";
import BarNavegacao from "@/view/barNavagacao";
import BarFilter from "@/view/barFilter";
import ViewPets from "@/view/viewPets";
import SemDados from "@/view/semDados";

import { FilterListPet } from "@/utils/filterLista";


export default function Home() {

  const [desc, setDesc] = useState({ estado: '', cidade: '', tipo: '', genero: '' })
  const [listPets, setListPets] = useState([])

  useEffect(() => {
    setListPets(FilterListPet(desc))
  }, [desc])

  return (
    <>
      <BarNavegacao />
      <main className="container notScroll">
        <BarFilter desc={desc} setDesc={setDesc} listPets={listPets} />
        {listPets.length > 0 ? <ViewPets listPets={listPets} /> : <SemDados />}
      </main>
    </>

  );
}
