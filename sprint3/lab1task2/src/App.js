
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar';

import About from './components/About';
import Register from './components/Register';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyForm from './components/FormHandle';

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
      <BrowserRouter>
      
      <Routes>
       <Route  path="/" Component={Navbar} />
      <Route exact path="/" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="/Register" Component={Register} />
        </Routes>
      </BrowserRouter>
       */}
       <MyForm/>
      
    </div>
  );
}

export default App;