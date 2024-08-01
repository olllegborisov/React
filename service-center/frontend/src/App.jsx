
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/parent-component/Main';
import Guarantee from './components/guarantee/parent-component/Guarantee';
import Delivery from './components/delivery/parent-component/Delivery';
import About from './components/about/parent-component/About';
import TradeIn from './components/trade-in/parent-component/TradeIn';
import Contacts from './components/contacts/parent-component/Contacts';
import PersonalData from './components/personal-data/PersonalData';
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
              <Route path="about" element={<About />} />
              <Route path="personalData" element={<PersonalData />} />
              <Route path="trade-in" element={<TradeIn />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
