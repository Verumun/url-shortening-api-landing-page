import React from 'react'
import './Footer.scss'
import logo from '../../images/logo.svg'

function Footer() {
  return (
    <section className='footer'>
        <div className="footer-logo"><img className='logo' src={logo} alt="" /></div>

        <div className="footer-navigation">
            
                <ul className='features'>
                    <li className='header'><a href="#">Features</a></li>
                    <li><a href="#">Link Shortening</a></li>
                    <li><a href="#">Branded Links</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>

                <ul className='resources'>
                    <li className='header'><a href="#">Resources</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Support</a></li>
                </ul>

                <ul className='company'>
                    <li className='header'><a href="#">Company</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                {/* Logos */}
                <div className="logo-links">
                    <i className="fa-brands fa-square-facebook" ></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            
        </div>
    </section>
  )
}

export default Footer