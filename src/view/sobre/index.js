'use client'

import './style.css'
import Imagem from '@/components/image'
import Image from '@/assets/logo_icone.png'

export default function Sobre() {
    return (
        <div id="sobre" className='sobre'>
            <div>
                <h1>Sobre a AdotePet</h1>
                <Imagem
                    src={Image}
                    alt={'adotepet'}
                    onMouseEnter={() => {document.querySelector("audio").play()}}
                    onMouseLeave={() => {document.querySelector("audio").pause()}}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <audio autoPlay={true}>
                <source src={'/hearbeat-71701.mp3'} type="audio/mpeg" />
            </audio>
        </div>
    )
}