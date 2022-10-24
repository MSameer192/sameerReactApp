import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');
  const [modeBtn, setModeBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (messeage, type) => {
    setAlert ({
      msg : messeage,
      type : type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);  
    
  }
  const toggleMode = () => {

    if (mode === "light") {
      setMode('dark')
      setModeBtnText('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }

    else {
      setMode('light')
      setModeBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Enable mode has been enabled", "success")
    }
  }



  return (
      <>
        
      < BrowserRouter >  
        <Navbar title="TexUtils" home="HOME" mode={mode} toggleMode={toggleMode} Btn={modeBtn} />
        <Alert alert={alert} />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Put text for Change format" mode={mode} />} />
              
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
