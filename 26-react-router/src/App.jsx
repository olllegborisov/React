import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import Info from './components/Info'
import SingleCourses from './components/SingleCourses'
import SingleInfo from './components/SingleInfo'
import './App.css'

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
            <Route path="courses/:courseSlag" element={<SingleCourses />} />
            <Route path="info" element={<Info />} />
            <Route path="info/:infoSlag" element={<SingleInfo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
