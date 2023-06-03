import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components1/Header';
import Home from './components1/Home';
import Login from './components1/Login';
import Details from './components1/Details';
import Errror from './components1/Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
