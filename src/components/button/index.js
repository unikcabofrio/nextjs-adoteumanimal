import './style.css'
import Icone from '../icone'
export function Button(props) {
    return (
        <button onClick={props.onClick} className={`${props.className ? props.className : ''} btn-Default `}>
            {props.icone ? <Icone nome={props.icone}/> : ''}
            {props.titulo}
        </button>
    )
}