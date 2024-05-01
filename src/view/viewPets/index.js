'use client'

import { useEffect, useState } from 'react'
import './style.css'
import { Select } from '@/services/dataService'



export default function ViewPets(){

    const [listPets,setListPets] = useState([])
    const [listMenu,setListMenu] = useState(['all'])

    function getPets(){
        const res = Select();
        setListMenu(state=>[...state, ...Object.keys(res[0])]); 
        setListPets(res);
    }

    useEffect(()=>{
        if(listMenu.length === 1) getPets()
    },[listMenu])

    return (
        <div className="viewPets">
            <div>
                {listMenu.map((item,index)=>{return <span key={index}>{item}</span>})}
            </div>
            {
                listPets.map((item,index)=>{
                    console.log(item)
                    return(
                        <div key={index}></div>
                    )
                })
            }
        </div>
    )
}