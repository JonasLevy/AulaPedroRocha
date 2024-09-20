import { useState } from "react"

function AddTask (props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onClickNewTask = () =>{
        if( !title.trim()){
            return alert("O campo tarefa precisa ser preenchido")
        }

        props.newtasks(title, description )
        setDescription("")
        setTitle("")
    }

    return <div className="space-y-3 bg-slate-200 p-4 rounded-md flex flex-col "> 
        <input type="text" placeholder="Nome" 
            className="p-1 rounded-md border-slate-500 border"
            value={title}
            onChange={(event)=>setTitle(event.target.value)}
        />
        <input type="text" placeholder="Descrição"
            className="p-1 rounded-md  border-slate-500 border"
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
        />
        <button 
            onClick={()=>onClickNewTask()}
            className="bg-slate-400 text-white rounded-md p-1 ">Criar</button>
    </div>
}

export default AddTask