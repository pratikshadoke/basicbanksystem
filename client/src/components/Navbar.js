import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav id="myNavbar" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">Bank System</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto text-center">
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink className="nav-link" to="/customer">Customers</NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink className="nav-link" to="/transaction">Transactions</NavLink>
              </li>
             

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
