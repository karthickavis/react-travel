import { AuthContext } from "./authentication/authGuard";  
import React, { Component } from "react";
import { MenuItems } from './menuitems'
import { Link } from "react-router-dom";
import "./navbarstyle.css";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }
  handleLogout = (logoutFn) => {
    return (event) => {
      event.preventDefault();
      logoutFn();
    };
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
         <nav className="NavbarItems">
            <h1 className="Navbar-Logo">Tripeasy</h1>
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          <ul className={this.state.clicked ? "Navmenu active" : "Navmenu"}>
            {MenuItems.map((item, index) => {
              if (item.title === "Logout") {
                // Instead of creating an arrow function inline in the onClick prop,
                // reference a pre-defined method that we create once
                return (
                  <li key={index} onClick={this.handleLogout(authContext.logout)}>
                    <i className={item.icon}></i>{item.title}
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>{item.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default NavMenu;