import './css/Tailwind.css'
import './css/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Credits from './components/Credits';
import Spacegame from './components/Spacegame';



function App() {

  return (

    <>

      <nav className="py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center">
        <button className="py-1 hover:underline text-brand2-100  font-bold focus:outline-none" > Space Game </button>
      </nav>


      <Router basename="/DEMO__react-github-pages-test">

        <Routes>
          <Route path='/' exact element={<Spacegame />} />
          <Route path='/credits' exact element={<Credits />} />
        </Routes>


      </Router>

      <Footer />

    </>

  );

}

export default App;
