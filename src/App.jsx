import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { v4 } from 'uuid'

function App() {
  
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [
    {
      id:1,
      title: "Estudar programação",
      description: "estudar todos os dias!" ,
      isCompleted: false
    },
    
  ])

  //useEffect(()=>{
  //  const fetchTasks = async () =>{
  //    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4',
  //      {
  //        method:"GET",
  //      } 
  //    )
  //    const data = await response.json()
  //    setTask(data)
  //  }

   // fetchTasks()

  //},[])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[])


  //função para alterar o isComlpeted 
  const onTaskClick = (taskId) =>{
    const newTasks = tasks.map((task)=>{
      if(task.id == taskId){
        return {...task, isCompleted:!task.isCompleted}
      }
      return task
    })
    setTask(newTasks)
  }


  // função para criar novas tasks
  const onNewtask = (title, description)=>{
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTask([...tasks, newTask])
  }

  const deleteTask = (idTask) =>{
    const newTasks = tasks.filter((tasks)=>{
      return tasks.id != idTask
    })

    setTask(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px]  p-2 space-y-3" >
        <h1 className="text-3xl text-slate-200 font-bold text-center" >GERENCIADOR DE TAREFAS</h1>
        <AddTask newtasks={onNewtask}/>
        <Tasks tasks={tasks} onClickTask={onTaskClick} deleteTask={deleteTask}/>  
      </div>
      
    </div>
  )
}

export default App
