'use client'

import { useState, useEffect } from "react";
import { FilterListPet } from "@/utils/filterLista";

import BarFilter from "@/view/barFilter";
import ViewPets from "@/view/viewPets";
import SemDados from "@/view/semDados";


export default function Adote() {

    const [desc, setDesc] = useState({ estado: '', cidade: '', tipo: '', genero: '' })
    const [listPets, setListPets] = useState([])

    useEffect(() => {
        setListPets(FilterListPet(desc))
    }, [desc])
    return (
        <section id="adote">
            <BarFilter desc={desc} setDesc={setDesc} listPets={listPets} />
            {listPets.length > 0 ? <ViewPets listPets={listPets} /> : <SemDados />}
        </section>
    )
}
