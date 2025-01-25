import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './components/frontend/About'; 
// import Contact from './components/frontend/Contact';
import './assets/css/style.scss';
import Home from './components/Home';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
