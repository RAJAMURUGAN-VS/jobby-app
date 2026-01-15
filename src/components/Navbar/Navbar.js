import './Navbar.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-website-logo"
      />
      <div className="nav-element-container">
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/jobs" className="nav-element">
          Jobs
        </Link>
      </div>
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Navbar)
