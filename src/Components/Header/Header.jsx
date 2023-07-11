import React from 'react'
import Navigation from '../Navigation/Navigation'
// import illustration from '/src/images/illustration-working.svg'
import illustration from '../../images/illustration-working.svg';
import './Header.scss';

// const content = [
//   {

//   }
// ]


function Header() {
  return (
    <div className='wrapper'>
      <Navigation/>

      <section className='landing'>
        <div className='content'>
          <h2>More than just shorter links</h2>
          <p>Build your brand's recognition and detailed insights on how your links are performing.</p>

          <a className='button-radius' href="#">Get Started</a>
        </div>

        <div>
          <img src={illustration} alt="" />
        </div>

      </section>
    </div>
  )
}

export default Header