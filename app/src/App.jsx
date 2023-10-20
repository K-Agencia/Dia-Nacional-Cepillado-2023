import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/App.css'
import { RoutersLinks } from './constants/RoutersLinks'
import Inscripciones from './pages/Inscripciones'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path={RoutersLinks.Inscripciones} element={<Inscripciones />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
