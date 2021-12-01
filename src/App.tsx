import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBarRedone';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './components/MainHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<MainHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
