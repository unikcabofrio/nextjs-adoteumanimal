'use client'

import './style.css'
import { useState } from 'react'

export default function FAQ() {

    const [faqs] = useState([
        { pergunta: "Pergunta", resposta: "Resposta da pergunta" },
        { pergunta: "Pergunta", resposta: "Resposta da pergunta" },
        { pergunta: "Pergunta", resposta: "Resposta da pergunta" },
        { pergunta: "Pergunta", resposta: "Resposta da pergunta" },
    ])

    return (
        <div id="faq" className='faqs'>
            <h1>Perguntas Frequentes</h1>
            <div>
                {
                    faqs.map((item, index) => {
                        return (
                            <details key={index}>
                                <summary>{index+1}º - {item.pergunta}</summary>
                                <div>
                                    <p>{item.resposta}</p>
                                </div>
                            </details>
                        )
                    })
                }

            </div>
        </div>
    )
}