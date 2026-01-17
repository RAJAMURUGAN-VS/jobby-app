import './Navbar.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdHome, MdExitToApp} from 'react-icons/md'
import {FaSuitcase} from 'react-icons/fa'

const Navbar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="nav-website-logo"
        />
      </Link>
      <div className="nav-element-container">
        <Link to="/" className="nav-link">
          <p className="nav-element">Home</p>
          <MdHome className="nav-home-icon" />
        </Link>
        <Link to="/jobs" className="nav-link">
          <p className="nav-element">Jobs</p>
          <FaSuitcase className="nav-login-icon" />
        </Link>
      </div>
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
      <button
        type="button"
        className="logout-icon-button"
        onClick={onClickLogout}
      >
        <MdExitToApp className="nav-logout-icon" />
      </button>
    </div>
  )
}

export default withRouter(Navbar)
