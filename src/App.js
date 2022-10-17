import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';





function App() {
  return (
    <div className="App">
      <>
      <Navbar title= "TexUtils" home="HOME"/>
      {/* <Navbar/> */}
      
      <TextForm heading="Put text for Change format" />

      {/* <About/> */}
      </>
    </div>
  );
}

export default App;
