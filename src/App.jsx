import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import useSound from "use-sound"
import musica from "./assets/musica/pokemon-music.mp3"


function App() {

  const [playSound] = useSound(musica)

  return (
    <div>
       <p id='btnM'>
      <button onClick={playSound}>Music</button>
      <button onClick={stop}>silence</button>

      </p>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route element={<ProtectedRoutes />}>
      <Route path='/pokedex' element={<PokedexPage />} />
      <Route path='/pokedex/:id' element={<PokedexIdPage />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
