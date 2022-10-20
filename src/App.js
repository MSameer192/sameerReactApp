import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const [modeBtn, setModeBtnText] = useState("Enable Dark Mode");

  // const [myStyle1, myNewStyle] = useState({
  //   color: "black",
  // });

  const toggleMode = () => {

    if (mode === "light") {
      setMode('dark')
      setModeBtnText('Enable Light Mode')
      document.body.style.backgroundColor = 'gray'
      // myNewStyle({
      //   color: 'white',
      // })
    }

    else {
      setMode('light')
      setModeBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      // myNewStyle({
      //   color: 'black'
      // })
    }
  }



  return (
    <div className="App">
      <>
        <Navbar title="TexUtils" home="HOME" mode={mode} toggleMode={toggleMode} Btn={modeBtn} />
        <TextForm heading="Put text for Change format" mode={mode} />

        {/* <About/> */}
      </>
    </div>
  );
}

export default App;
