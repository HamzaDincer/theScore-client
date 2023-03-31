import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import OddsDisplay from './pages/OddsDisplay/OddsDisplay';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/oddsdisplay' element={<OddsDisplay />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
