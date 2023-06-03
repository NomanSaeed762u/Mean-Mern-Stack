import React from 'react';
import Navbar from './components/Navbar';
import Production from './components/Production';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Kpi from './components/Kpi';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} /> 
          <Route path={"/kpi"} element={<Kpi />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/production"} element={<Production />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
