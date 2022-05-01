import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import pbrLogo from '../images/logo.svg';
import { Link } from "gatsby"

// markup
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow-sm">
        <div className="container">
            <Link to="/" className="navbar-brand" activeClassName="active">
                <img src={pbrLogo} width="50" alt="Pedro Baltazar Relvas Logo"/>  
            </Link>
            <div className="d-flex flex-row-reverse">
                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/pedro-baltazar-relvas">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active px-3 " aria-current="page" href="https://www.instagram.com/baltazzzar.indie/">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
