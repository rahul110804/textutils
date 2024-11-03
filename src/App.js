import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode is enabled", "success");
      document.title = 'TextUtils-Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} modeText={Mode === 'light'? 'Enable Dark Mode' : 'Disable Dark Mode'}>
        <Link to="/about" className="btn btn-primary">About</Link>
      </Navbar>
      <Alert Alert={alert} />
      <div className="container my=3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm Mode={Mode} toggleMode={toggleMode} modeText={Mode === 'light'? 'Enable Dark Mode' : 'Disable Dark Mode'} heading="Enter the text" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;