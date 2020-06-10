import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar.jsx";
import Footer from './Components/Footer.jsx';




function App() {
  return (
    <div className="App"> 
    <NavBar />   
    <Home />
    <Footer />
    </div>
  );
}

export default App;
