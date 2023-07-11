import React from 'react'
import './Form.scss'
import backgroundImage from '../../../images/bg-boost-desktop.svg'

const Form =()=> {
  return (
    <div>
        <div className="form-wrapper">
            <form action="">
                <div className="input-control">
                    <input type="text" placeholder='Shorten a link here..' />
                    <div className="error"></div>
                </div>
                <button>Shorten it!</button>
            </form>
        </div>
    </div>
  )
}

export default Form;