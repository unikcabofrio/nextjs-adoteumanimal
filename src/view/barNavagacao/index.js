'use client'

import './style.css'

import Logo from '@/assets/logo.png'
import Imagem from '@/components/image'
import { Button } from '@/components/button'
import { useState } from 'react'
import { EventoScrool } from '@/utils/event'

export default function BarNavegacao() {

    const [listaMenu] = useState([
        { nome: "Adote", link: "adote" },
        { nome: "Como adotar", link: "comoadotar" },
        { nome: "Sobre", link: "sobre" },
        { nome: "FAQ", link: "faq" }
    ])

    return (
        <header className="barNav">
            <Imagem src={Logo} alt={'Adote um Pet'} />
            <ul>
                {
                    listaMenu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a onClick={()=>{EventoScrool(item.link)}}>{item.nome}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <Button titulo={'Cadastre um Pet'} className={'btnNavBar'} />
        </header>
    )
}