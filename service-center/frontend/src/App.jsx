
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/Main';
import Guarantee from './components/guarantee/Guarantee';
import Delivery from './components/delivery/Delivery';
import MainLayout from './layouts/MainLayout';
import './fonts/typography.css'
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path="guarantee" element={<Guarantee />} />
              <Route path="delivery" element={<Delivery />} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
