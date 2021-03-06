import { Component } from "react";
import logo from './../logo.svg';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">

          <a class="navbar-brand">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt='logo' />
          ReactApp
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to='/' exact activeClassName="active" className="nav-link">Home <span class="sr-only">(current)</span></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/users' activeClassName="active" className="nav-link">Users</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/about' activeClassName="active" className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;