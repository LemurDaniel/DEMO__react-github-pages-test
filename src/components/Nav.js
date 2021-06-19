import React, { useContext } from 'react'
import UserContext from './components/UserContext';


const Nav = ({ navigations }) => {


    return (

        <nav className="px-5 fixed w-full top-0 z-50 border-b border-brand2-100 bg-dark-700 flex justify-evenly text-white font-bold">
            <p className="py-0 hover:underline text-brand2-100" > </p>
        </nav>


    )

}

export default Nav;