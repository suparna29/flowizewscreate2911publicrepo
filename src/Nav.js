import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './images/flowize_logo.png';

function Nav() {
  return (
    <div>


      <Link to="/"><img src={logo} className="logo" alt='logo'/></Link>
      <nav className='navbar'>
        
          <Link className='dropdown'>Løsninger
            <div className='dropdown-content'>
            
                <Link to="ccm">CCM</Link>
                <Link to="integrasjoner">Integrasjoner</Link>
                <Link to="automatisering">Automatisering</Link>
                <Link to="kommunikasjon">Kommunikasjon</Link>
              
            </div>
          </Link>
          <Link to="/kunder">Kunder</Link>
          <Link to="/partnere">Partnere</Link>
          <Link to="/blogg">Blogg</Link>
          
          <Link className='right' to="/om-flowize">Om Flowize</Link>
          <Link  className='right' to="/kontakt-oss">Kontakt oss</Link> 
        
        
      </nav>

    </div>
  );
}

export default Nav;
