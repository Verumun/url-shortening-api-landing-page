import React from 'react'
// import logo from '/src/images/illustration-working.svg'
import logo from '../../images/logo.svg'
import './Navigation.scss'

const Navigation =() => {
  return (
    <div className='navigation'>
        <div className='navigation_left'>
            <div className='logo'>
                <img src={logo}></img>
            </div>

            <nav>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </nav>
        </div>

        {/* Right NAvigation */}
        <div className='navigation_right'>
            <nav>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li ><a href="#" className='signUp button-radius'>Sign Up</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navigation