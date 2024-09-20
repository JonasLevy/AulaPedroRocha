import { ChevronLeftCircle } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"


const DetailsTask = () => {
  const [seachParams] = useSearchParams()
  const title = seachParams.get("title")
  const description = seachParams.get("description")
  const navigate = useNavigate()

  return <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    <div className="w-[500px]  p-2 space-y-3" >
      <div className="flex  items-center justify-between">
        <button className="text-slate-100 text-3xl" onClick={navigate(-1)}>
          <ChevronLeftCircle  />
        </button>
        <h1 className="text-3xl text-slate-200 font-bold text-center" >DETALHE DA TAREFA</h1>
        <div></div>
      </div>
      <div className=" p-2 bg-slate-100 w-[500px]">
        <h1 className="text-center text-2xl font-bold text-slate-600">{title}</h1>
        <p className=" text-slate-600">{description}</p>
      </div>
    </div>
  </div>
}

export default DetailsTask