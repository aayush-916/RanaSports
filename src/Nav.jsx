import { useState } from 'react'
// import {Link} from 'react-router-dom'
import './App.css'

function Nav() {
  const [toggle, settoggle] = useState(false)
  const handelclick = ()=> {
    settoggle(!toggle)
  }
  const bodyclick = ()=>{
    if(toggle){
      settoggle(!toggle)
    }
  }
  //http://localhost:5173/
  return (
    <>
    <div id='fix' className="fix">
      <nav className={`na ${toggle ? 'mna' : ''}`}>
        <div className='hd'>
        <img src='./logo.jpg' className='brand'></img>
        <h3 className='menu' onClick={handelclick}>☰</h3>
        </div>
        <ul className={`ull ${toggle ? 'active1' : ''}`}>
          <li onClick={bodyclick}>Home</li>
          <li onClick={bodyclick}>Games</li>
          <li onClick={bodyclick}>Franchise </li>
          <li onClick={bodyclick}>About Us</li>
          <li onClick={bodyclick}>Contact Us</li>
        </ul>
        {/* <ul className={`ull ${toggle ? 'active1' : ''}`}>
          <li><Link to='/' onClick={bodyclick}>Home</Link></li>
          <li><Link to='/about' onClick={bodyclick}>About Us</Link></li>
          <li><Link to='/service' onClick={bodyclick}>Services</Link></li>
          <li><Link to='/portfolio' onClick={bodyclick}>Portfolio</Link></li>
          <li><Link to='/contact' onClick={bodyclick}>Contact Us</Link></li>
        </ul> */}
        
      </nav>
    </div>
    </>
  )
}

export default Nav
