import './App.scss';
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import OddsDisplay from './pages/OddsDisplay/OddsDisplay';

function App() {

  const [oddsType, setOddsType] = useState('american')

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/oddsdisplay' element={<OddsDisplay oddsType={oddsType} setOddsType={setOddsType} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
