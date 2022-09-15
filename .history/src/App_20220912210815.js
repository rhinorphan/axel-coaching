import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Entreprise from './pages/Entreprise';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/entreprise' element={<Entreprise />}/>
      </Routes>
    </Router>
  );
}

export default App;
