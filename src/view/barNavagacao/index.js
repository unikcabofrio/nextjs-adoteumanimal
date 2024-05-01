import './style.css'

import Logo from '@/assets/logo.png'
import Imagem from '@/components/image'
import { Button } from '@/components/button'
import { useState } from 'react'

export default function BarNavegacao() {

    const [listaMenu] = useState([
        { nome: "Adote", link: "" },
        { nome: "Como adotar", link: "" },
        { nome: "Sobre", link: "" },
        { nome: "FAQ", link: "" }
    ])

    return (
        <header className="barNav">
            <Imagem src={Logo} alt={'Adote um Pet'} />
            <ul>
                {
                    listaMenu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>{item.nome}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <Button titulo={'Cadastre um Pet'} className={'btnNavBar'} />
        </header>
    )
}