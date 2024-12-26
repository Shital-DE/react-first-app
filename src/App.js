// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar title="Text Utils" aboutText="About us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
