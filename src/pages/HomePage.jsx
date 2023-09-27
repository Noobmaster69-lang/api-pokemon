import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {


  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    
    <div  >
        <h1>Pokedex </h1>
        <h2>Hi Trainer</h2>
        <p id="p1" >To start, please, enter your trainer name</p>
        <form onSubmit={handleTrainer}> 
            <input ref={inputTrainer} type="text" />
            <button>Start!</button>
        </form> 
    </div>
  )
}


export default HomePage