import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
