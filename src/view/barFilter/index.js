import './style.css'
import { Sexo,Tipo } from "@/utils/dadosSelect";
import { listarFiltros } from '@/utils/filterLista'
import { Dropdown } from "@/components/dropDown"

export default function BarFilter({desc, setDesc,listPets}) {

    function handleClick(key,value){

        if (key === 'genero'){
            value = Sexo.indexOf(value)
            if(value === -1) value = ''
        }
        else if (key === 'tipo'){
            value = Tipo.indexOf(value)
            if(value === -1) value = ''
        }
        else{
            if(value === 'Todos') value = ''
        }

        setDesc(prevState => ({
            ...prevState,
            [key]: value
        }));
        
    }   

    return (
        <div className="filterLista">
            <div>
                <Dropdown
                    titulo={'Estado'}
                    desc={desc['estado'] ? desc['estado'] : 'Todos'}
                    icone={'location_on'}
                    lista={['Todos',...listarFiltros('estado')]}
                    onClick={(e) => { handleClick('estado',e.target.innerText) }}
                />
                <Dropdown
                    titulo={'Cidade'}
                    desc={desc['cidade'] ? desc['cidade'] : 'Todos'}
                    icone={'location_city'}
                    lista={['Todos',...listarFiltros('cidade')]}
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
            </div>

        </div>
    )
}