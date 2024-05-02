import './style.css'
import Icone from '../icone';
import { useEffect, useState } from 'react';

export function Dropdown(props) {
    const [active, setActive] = useState(false);
    const [mouseInside, setMouseInside] = useState(false);

    useEffect(() => {
        if (!mouseInside) {
            const timeoutId = setTimeout(() => {
                setActive(false);
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [mouseInside]);

    return (
        <div className="dropdown"
            onMouseEnter={() => setMouseInside(true)}
            onMouseLeave={() => setMouseInside(false)}
        >
            <div className="dropbtn" onClick={() => { setActive(state => !state) }}>
                <div className='button'>
                    <span>
                        <Icone nome={props.icone} />
                        {props.titulo}
                    </span>
                    <span className='desc'>{props.desc}</span>
                </div>
                <Icone nome={'expand_more'} />
            </div>
            <div className={`dropdown-content ${active ? 'ativo' : ''}`}>
                {
                    props.lista.map((item, index) => {
                        return <div onClick={props.onClick} key={index}>{item}</div>
                    })
                }
            </div>
        </div>
    );
}