// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nab-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="website-logo"
      alt="website logo"
    />
    <ul className="nav-menu">
      <Link className="nav-link" to="/">
        <li>Home</li>
      </Link>
      <Link className="nav-link" to="/products">
        <li>Products</li>
      </Link>
      <Link className="nav-link" to="/cart">
        <li>Cart</li>
      </Link>
      <Link className="nav-link" to="/login">
        <li>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
