import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Courses from './components/Courses'
import NotFound from './components/NotFound'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
