import React, { useContext } from 'react'
import { Link} from "react-router-dom";

import logo from '../logo.svg';
import { UserContext } from './UserContext';

const Header = () => {
  const {user}=useContext(UserContext);
  console.log(user);
  return (
    <header className='flex flex-row justify-between items-center bg-gray-800 text-gray-200'>
      <Link to='/'>
        <img src={logo} alt="logo" width={180} height={180}/>
      </Link>
      <nav>
        <ul className='px-8 flex flex-row gap-4'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          { user && <li><Link to='/page' >Page (protected)</Link></li>}
        </ul>
      </nav>
      
    </header>
  )
}

export default Header