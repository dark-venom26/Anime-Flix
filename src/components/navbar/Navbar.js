import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className="logo">
          <Link to="/">
            <div className="logoImg"></div>
          </Link>
        </div>
        <div className="links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar