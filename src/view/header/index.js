'use client'
import './style.css'
import Image from '@/assets/pets.png'
import Imagem from "@/components/image";
import { Button } from "@/components/button";
import { EventoScrool } from '@/utils/event';

export default function Header() {
    return (
        <div className='header'>
            <div>
                <h1>Adote um amigo <br /> sem sair de Cada!</h1>
                <p>A cada local tem sempre alguem precisando de um lar!</p>
                <div>
                    <Button titulo={'Quero Adotar'} className={'btnHeaderAdote'} onClick={()=>{EventoScrool('adote')}}/>
                    <Button titulo={'Saiba mais'} className={'btnHeaderMais'} onClick={()=>{EventoScrool('comoadotar')}}/>
                </div>
            </div>
            <Imagem src={Image} alt={'Adote um pet'} />
        </div>
    )
}