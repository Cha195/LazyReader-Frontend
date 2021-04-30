import React from 'react'
import wave from '../../Assets/login-wave.svg'
import './index.css'

const Login = () => {
  return (
    <div>
      <div className='login-header'>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
        <form action="/search" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <p style={{ margin: '10px 0' }}>Forgot password?</p>
          <input type="submit" value="Login" className="btn solid" />
          <p className="social-text">Do not have an account? <a href='/register' style={{textDecoration: 'none', cursor: 'pointer', color: '#0099ff'}}>Sign Up</a></p>
        </form>
      </div>
      <img alt='wave' src={wave} className='login-wave'/>
    </div>
  )
}

export default Login
