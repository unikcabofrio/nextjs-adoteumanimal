import { Select } from "@/services/dataService";
import { Sexo,Tipo } from "./dadosSelect";

export let listPets = []
export let listMenu = []

export function FilterListPet(filter) {
    let listPets = Select();
    listPets = shuffle(listPets);

    listPets = listPets.filter(pet => {
        if (filter.estado !== "" && pet.estado !== filter.estado) {return false;}
        if (filter.cidade !== "" && pet.cidade !== filter.cidade) {return false;}
        if (filter.tipo !== "" && pet.tipo !== filter.tipo) {return false;}
        if (filter.genero !== "" && pet.genero !== filter.genero) {return false;}
        return true;
    });

    return listPets;
}

export function listarFiltros(key,array) {
    var todosJSON = [];

    if(array){
        array.forEach((elemento)=>{
            if (key === 'genero') todosJSON.push(Sexo[elemento[key]])
            else if (key === 'tipo') todosJSON.push(Tipo[elemento[key]])
            else todosJSON.push(elemento[key])
        })
    }else{
        Select().forEach((elemento)=>{
            if (key === 'genero') todosJSON.push(Sexo[elemento[key]])
            else if (key === 'tipo') todosJSON.push(Tipo[elemento[key]])
            else todosJSON.push(elemento[key])
        })
    }

   
    const uniqueValues = [...new Set(todosJSON)];
    uniqueValues.sort();
    return uniqueValues
}

function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}