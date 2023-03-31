import './App.scss';
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import OddsDisplay from './pages/OddsDisplay/OddsDisplay';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {

  const [oddsType, setOddsType] = useState('american')

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/oddsdisplay' element={<OddsDisplay oddsType={oddsType} setOddsType={setOddsType} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
