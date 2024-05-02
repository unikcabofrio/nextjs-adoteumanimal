import './style.css'
import Imagem from '@/components/image'
import Foto from '@/assets/banner2.png'

export default function SemDados() {
    return (
        <div className='semDados'>
            <div>
                <h5>Ops!</h5>
                <p>Ainda não temos um amigo para você nessas especificações</p>
            </div>
            <Imagem src={Foto} alt={'sem dados'} />
        </div>
    )
}