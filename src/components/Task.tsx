import { useState } from "react"

interface props{
    title:string
    state:boolean
}

const Task = ({title,state}:props) => {
    const [nowstate, changestate] = useState(state)
    return(
        <div className="bg-blue-100 px-6 py-4 rounded shadow flex items-center mb-4">
            <input type="checkbox" className="w-1/12" checked={nowstate} onChange={()=>{changestate(!nowstate)}}/>
            {!nowstate && <h3 className="text-lg text-gray-500 w-10/12 ">{title}</h3>}
            {nowstate && <h3 className="text-lg text-gray-500 w-10/12 line-through">{title}</h3>}
        </div>
    )
}

export default Task