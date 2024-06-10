import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register.js'
import './App.css';

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
