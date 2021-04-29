import React from 'react'

const Login = () => {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="https://www.facebook.com" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.google.com" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.linkedin.com" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  )
}

export default Login
