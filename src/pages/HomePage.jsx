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
    <div>
    <div id="inicio">
        <h1> <img id="hea1" src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67" /> </h1>
        <h2>¡Hi Trainer!</h2>
        <p id="p1" >To start, enter your trainer name</p>
        <form id="priF" onSubmit={handleTrainer}> 
            <input ref={inputTrainer} type="text" />
            <button id="circle">Start!</button>
        </form>
    </div>
    <footer>
    <h3 id="fot"></h3>
    <h3 id="fot2"></h3>

  </footer>
    </div>
     
  )
}


export default HomePage