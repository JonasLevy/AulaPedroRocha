import { Check, ChevronRightIcon, Pencil, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props){
    const navigate = useNavigate()

    const onClickNavigate = (task) =>{
        navigate(`/task?title=${task.title}&description=${task.description} `)
    }
    const onClickNavigateEdit = (task) =>{
        navigate(`/edit?title=${task.title}&description=${task.description} `)
    }

   return<>
        <ul className="space-y-3 bg-slate-200 p-4 rounded-md" > 
            {
                props.tasks.map((task)=>( 
                    <li key={task.id}  className="flex space-x-1 ">                        
                        <button className="bg-slate-400 text-white w-full p-1  rounded-md flex gap-2" 
                            onClick={()=>props.onClickTask(task.id)}>
                            <Check className={task.isCompleted? "":"collapse"}/>
                            { task.title } 
                        </button>
                        <button className="bg-slate-400 text-white p-1  rounded-md" onClick={()=>props.deleteTask(task.id)}> <Trash/></button>
                        <button className="bg-slate-400 text-white p-1  rounded-md" onClick={()=>onClickNavigate(task)}> <ChevronRightIcon/></button>
                    </li>
                ))
            }
        </ul>
    </>
}  


export default Tasks