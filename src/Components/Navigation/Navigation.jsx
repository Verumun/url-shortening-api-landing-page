import React from 'react'
import { useRef } from 'react'
// import logo from '/src/images/illustration-working.svg'
// import navToggle from '../../images/'
import logo from '../../images/logo.svg'
import './Navigation.scss'

const Navigation =() => {

    const navRef = useRef();
    const showMobileNav = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    // const toggleButtonEl = document.getElementById('toggleButton');
    // const mobileNav = document.getElementById('mobile-nav');

    // toggleButtonEl.addEventListener('click', function(){
    //     console.log('vll')
    // })

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

        {/* <i className='  fa-solid fa-bars'></i> */}
        {/* <div className='Nav-toggle'><img src={navToggle} alt="" /></div> */}
        
        {/* ----------MOBILE NAVIGATION-------- */}
        <div className="navigation__mobile" id='mobile-nav'>
            <div className='logo'>
                <img src={logo}></img>
            </div>

            <div className="navigate">
            {/* <i className='fa-solid fa-bars'></i> */}

            <i onClick={showMobileNav} className='fa-solid fa-bars' id='toggleButton'></i>
                <nav ref={navRef}>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Login</a></li>
                        <li ><a href="#" className='signUp button-radius'>Sign Up</a></li>
                    </ul>
                </nav>
            </div>

        </div>

    </div>

    
  )
}

export default Navigation