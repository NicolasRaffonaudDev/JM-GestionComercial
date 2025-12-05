import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='lotes' element={<div> Lotes Page </div>} />
      </Routes>
    </div>
  )
}

export default App
