import './style.css'
export function Button(props) {
    return (
        <button onClick={props.onClick} className={`${props.className ? props.className : ''} btn-Default `}>
            {props.titulo}
        </button>
    )
}