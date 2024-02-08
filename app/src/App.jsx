import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inscripciones from './pages/Inscripciones'
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast'
import './css/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inscripciones />} />
        <Route exact path={'/instituciones'} element={<Home />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
