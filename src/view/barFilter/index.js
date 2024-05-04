import './style.css'
import { Sexo,Tipo } from "@/utils/dadosSelect";
import { listarFiltros,listaUF,listaCity } from '@/utils/filterLista'
import { Dropdown } from "@/components/dropDown"
import { Button } from '@/components/button';

export default function BarFilter({desc, setDesc}) {

    function handleClick(key,value){

        if (key === 'genero'){
            value = Sexo.indexOf(value)
            if(value === -1) value = ''
        }
        else if (key === 'tipo'){
            value = Tipo.indexOf(value)
            if(value === -1) value = ''
        }
        else if (key === 'estado'){
            if(value === 'Todos') value = ''
            setDesc(prevState => ({
                ...prevState,
                ['cidade']: ''
            }));
        }
        else{
            if(value === 'Todos') value = ''
        }

        setDesc(prevState => ({
            ...prevState,
            [key]: value
        }));  
    }   

    function ResetDes(){
        setDesc({ estado: '', cidade: '', tipo: '', genero: '' })
    }

    return (
        <div className="filterLista">
            <div>
                <Dropdown
                    titulo={'Estado'}
                    desc={desc['estado'] ? desc['estado'] : 'Todos'}
                    icone={'location_on'}
                    lista={['Todos',...listaUF()]}
                    onClick={(e) => { handleClick('estado',e.target.innerText) }}
                />
                <Dropdown
                    titulo={'Cidade'}
                    desc={desc['cidade'] ? desc['cidade'] : 'Todos'}
                    icone={'location_city'}
                    lista={['Todos',...listaCity(desc['estado'])]}
                    onClick={(e) => { handleClick('cidade',e.target.innerText) }}
                />
                <Dropdown
                    titulo={'Tipo'}
                    desc={desc['tipo'] || desc['tipo'] === 0 ? Tipo[desc['tipo']] : 'Todos'}
                    icone={'pets'}
                    lista={['Todos',...listarFiltros('tipo')]}
                    onClick={(e) => { handleClick('tipo',e.target.innerText) }}
                />
                <Dropdown
                    titulo={'Gênero'}
                    desc={desc['genero'] || desc['genero'] === 0 ? Sexo[desc['genero']] : 'Todos'}
                    icone={'male'}
                    lista={['Todos',...listarFiltros('genero')]}
                    onClick={(e) => { handleClick('genero',e.target.innerText) }}
                />
                <Button titulo="Limpar" className={'btnFilter'} icone={'delete'} onClick={()=>{ResetDes()}}/>
            </div>

        </div>
    )
}