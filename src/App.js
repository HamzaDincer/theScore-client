import './App.scss';
import Profile from './pages/Profile/Profile.js';
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import OddsDisplay from './pages/OddsDisplay/OddsDisplay';
import HomePage from './pages/HomePage/HomePage';
import FreePlay from './pages/FreePlay/FreePlay';
<<<<<<< HEAD
import NewsPage from './pages/NewsPage/NewsPage';
=======
import Submit from './pages/Submit/Submit';
>>>>>>> develop

function App() {
  const [oddsType, setOddsType] = useState('american')
  return (
    <>
    <BrowserRouter>
<<<<<<< HEAD
    {/* <Header /> */}
=======
>>>>>>> develop
      <Routes>
        <Route path='/' element={<HomePage oddsType={oddsType}/>} />
        <Route path='/oddsdisplay' element={<OddsDisplay oddsType={oddsType} setOddsType={setOddsType} />}/>
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/freeplay' element={<FreePlay/>} />
<<<<<<< HEAD
        <Route path='/news' element={<NewsPage/>} />
=======
        <Route path='/submit' element={<Submit/>} />
>>>>>>> develop
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
