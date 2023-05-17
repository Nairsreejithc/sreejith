import './App.css';
import Home from './components/Home';
import Navbars from './components/Navbars';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<UpdateUser />} />
        </Routes>
    </div>
  );
}

export default App;
