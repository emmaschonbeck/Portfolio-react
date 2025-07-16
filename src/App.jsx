import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App