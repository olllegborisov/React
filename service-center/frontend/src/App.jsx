
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/Main';
import Cities from './components/main/Cities';
import MainLayout from './layouts/MainLayout';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path="about" element={<Cities />} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
