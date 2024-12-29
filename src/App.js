// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#173b5f'
      showAlert("Dark mode has been enabled.", "success")
      document.title = 'TextUtils - Dark mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing!'
      }, 2000);

       setInterval(() => {
        document.title = 'Use TextUtils!'
      }, 1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled.", "success")
      document.title = 'TextUtils - Light mode';
    }
  }  
  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Utils"
        mode={mode} toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={ alert} />
      <div className="container my-3">
        <Routes>
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} />
             } /> 
          <Route exact path="/about" element={<About  mode={mode}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
