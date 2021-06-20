import './css/Tailwind.css'
import './css/App.css';

import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';

import Spacegame from './components/Spacegame';



function App() {

  return (

    <>


      <nav className="py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center">
        <button className="py-1 hover:underline text-brand2-100  font-bold focus:outline-none" > Space Game </button>
      </nav>

      <Spacegame />

      <Footer />

    </>

  );

}

export default App;
