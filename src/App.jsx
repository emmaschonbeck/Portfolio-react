import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ProjectsPage' element={<ProjectsPage />} />
        <Route path='/ContactPage' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App