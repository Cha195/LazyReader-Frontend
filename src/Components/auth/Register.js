import React from 'react'
import './index.css'
import wave from '../../Assets/login-wave.svg'

const Register = () => {
  return(
    <div>
      <div className='login-header'>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
        <form action="/search" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Already have an account? <a href='/login' style={{textDecoration: 'none', cursor: 'pointer', color: '#0099ff' }}>Sign In</a></p>
      </form>
      <img alt='wave' src={wave} className='login-wave'/>
    </div>
  )
}

export default Register
