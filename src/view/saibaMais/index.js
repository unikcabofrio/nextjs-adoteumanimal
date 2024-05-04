'use client'

import './style.css'
import Icone from "@/components/icone"
import { useState } from "react"

export default function SaibaMais() {

    const [lista] = useState([
        { icone: "search", titulo: "Encontre seu pet", descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { icone: "description", titulo: "Formulário de interesse", descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { icone: "heart_check", titulo: "Avaliação", descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { icone: "chair", titulo: "Pode buscar seu pet", descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ])

    return (
        <div id="comoadotar" className='cadotar'>
            <h1>Entenda como funciona</h1>
            <div>
                {
                    lista.map((item, index) => {
                        return (
                            <div key={index}>
                                <Icone nome={item.icone} />
                                <h4>{item.titulo}</h4>
                                <p>{item.descrip}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p>
                Ainda ficou com dúvidas? Saiba mais
                <a href="#">Clicando aqui</a>
            </p>
        </div>
    )
}