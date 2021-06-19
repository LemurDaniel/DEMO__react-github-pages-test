import './css/Tailwind.css'
import './css/App.css';

import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';

import Spacegame from './components/Spacegame';



function App() {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {

    const h = window.screen.height;
    const w = window.screen.width;

    if(w > 720) {
      setWidth(w * 0.75)
      setHeight(h * 0.55)
    } else {
      setWidth(w * 0.85)
      setHeight(h * 0.55)
    }
  }, [])

  return (

    <>


      <nav className="py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center">
        <button className="py-1 hover:underline text-brand2-100  font-bold" > Space Game </button>
      </nav>

      <Spacegame width={window.screen.width} height={window.window.innerHeight-70} />

      <Footer />

    </>

  );

}

export default App;
