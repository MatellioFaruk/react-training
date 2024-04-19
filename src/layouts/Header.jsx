import React, { useContext } from 'react'
import { AuthenticationContext } from '../context/authentication.context'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const { logout } = useContext(AuthenticationContext)

    const authState = useSelector(state => state.auth)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {JSON.stringify(authState)}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/privacy-policy'>
                            Privacy policy
                        </Link>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">

                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>

    )
}
