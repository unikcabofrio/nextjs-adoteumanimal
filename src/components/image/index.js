import Image from 'next/image';
export default function Imagem(props) {
    return <Image
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        src={props.src}
        alt={props.alt}
        size={'cover'}
        width={0}
        height={0}
        priority

    />
}