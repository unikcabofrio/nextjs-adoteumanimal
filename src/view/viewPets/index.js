/* eslint-disable @next/next/no-img-element */
'use client'

import './style.css'
import { Button } from '@/components/button'
import Icone from '@/components/icone'
import { Sexo, SexoIco } from '@/utils/dadosSelect'

export default function ViewPets({listPets}) {
    return (
        <div className="viewPets">
            {
                listPets.map((item, index) => {
                    return (
                        <div key={index} className='boxPets'>
                            <img src={`/${item.tipo}/${item.fotos}.png`} alt={`foto do ${item.nome}`} />
                            <div className='info'>
                                <div className='nomeIdade'>
                                    <span>{item.nome}</span>
                                    <span>{item.idade}</span>
                                </div>
                                <div>
                                <span>
                                    <Icone nome={SexoIco[item.genero]} />
                                    {Sexo[item.genero]}
                                </span>
                                <span>
                                    <Icone nome={'location_on'} />
                                    {item.cidade} - {item.estado}
                                </span>
                                </div>
                            </div>

                            <p>
                                {item.descricao}
                            </p>
                            <div className='button'>
                                <Button titulo={'Adotar'} className={'btnBoxPets'} />
                                <Button titulo={'Detalhes'} className={'btnBoxPets details'} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}