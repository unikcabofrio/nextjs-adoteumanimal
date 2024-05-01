import { dbArray } from "@/database/data"

export function Select(keyFilter){
    return dbArray.map(element=>{
        return keyFilter ? element[keyFilter] : element
    })
}

export function Insert(value,key){
    dbArray[0][key] = value
}

export function Remove(key){
    delete dbArray[0][key]
}