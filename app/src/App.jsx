import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/App.css'
// import { RoutersLinks } from './constants/RoutersLinks'
import Inscripciones from './pages/Inscripciones'
// import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Inscripciones />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
