import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Awair from './Awair';
import Sensedge from './Sensedge';
import Aqara from './Aqara';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-slate-300 bg-center'>
        {/* <div className='absolute inset-0 bg-black bg-opacity-40'></div> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Awair' element={<Awair />} />
          <Route path='/Sensedge' element={<Sensedge />} />
          <Route path='/Aqara' element={<Aqara />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
