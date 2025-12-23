import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home, Conditions } from './Pages'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/conditions" element={<Conditions/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}


