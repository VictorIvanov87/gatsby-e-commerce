import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const links = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/about", text: "About" },
  ]

  const navbarHandler = () => {
    if (isOpen) {
      setIsOpen(false)
      setCss("collapse navbar-collapse")
    } else {
      setIsOpen(true)
      setCss("collapse navbar-collapse show")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo}></img>
      </Link>
      <Link to="/about" className="navbar-brand"></Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ms-sm-5">
            <FaCartArrowDown className="cart-icon"></FaCartArrowDown>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
