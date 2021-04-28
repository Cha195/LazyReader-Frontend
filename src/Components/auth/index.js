import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './index.css'

const Auth = () => {
  const [signUpMode, setSignUpMode] = useState(false)

  const handleClick = (event) => {
    if(event.target.name === 'sign-up') {
      setSignUpMode(true)
    } else {
      setSignUpMode(false)
    }
  }

  return (
    <div className={signUpMode ? "container sign-up-mode" :  "container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login />
          <Register /> 
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" name="sign-up" onClick={handleClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" name="sign-in" onClick={handleClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Auth