import './Login.css'
import {Component} from 'react'

class Login extends Component {
  state = {username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="login-container">
        <form className="login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <label htmlFor="username" className="login-form-label">
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            className="login-form-input"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="username" className="login-form-label">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            className="login-form-input"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="login-form-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
