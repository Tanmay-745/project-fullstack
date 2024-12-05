import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import { UserContext } from "../../../contexts/UserContext";

const Header = () => {
  // import user and logout from useAuth
  // const { user, LogOut } = useAuth();

  // Theme management state
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const { user } = useContext(UserContext)

  const handleLogout= () => {
    localStorage.removeItem("authToken")
  }

  console.log("User: ", user)

  return (
    <div className={`header sticky-top shadow-lg ${theme}-theme`}>
      <Navbar className="" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-text">
            <h1>
              <b>S</b>hri <b>H</b>ari
            </h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className={`text-bg-light mt-2 ${theme === "dark" ? "bg-dark text-white" : ""}`}
            id="responsive-navbar-nav"
          >
            <Nav className="mx-auto nav-bar">
              <Nav.Link as={Link} to="/about">
                ABOUT US
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                CONTACT US
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                EXPLORE SHOP
              </Nav.Link>
              {/* user login manage menu here */}
              {!user ? (
                <>
                  <Nav.Link as={Link} to="/login">
                    <Button className="btn btn-regular">Sign in</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registration">
                    <Button className="btn btn-regular">Registration</Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    DASHBOARD
                  </Nav.Link>
                  <NavDropdown
                    eventKey={1}
                    title={
                      user.photoURL ? (
                        <img
                          className="profile-img"
                          src={user.photoURL}
                          alt="user pic"
                        />
                      ) : (
                        <img
                          src="https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg"
                          alt=""
                          className="profile-img"
                        />
                      )
                    }
                    id="basic-nav-dropdown"
                  >
                    <div className="dashboard-box mx-auto">
                      <div className="profile-info text-center">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt=""
                            className="profile-info-img"
                          />
                        ) : (
                          <img
                            src="https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg"
                            alt=""
                            className="profile-info-img"
                          />
                        )}

                        <p className="regular-subtitle mt-2">
                          {user.displayName}
                        </p>
                        <Link
                          to="/profile"
                          className="btn btn-success py-1 px-2 rounded-pill "
                        >
                          <AccountCircleIcon /> View Profile
                        </Link>
                      </div>
                      <hr />
                      <div className="profile-info-body">
                        <p>
                          <Link to="/" onClick={handleLogout}>
                            <LogoutIcon /> Logout
                          </Link>
                        </p>
                      </div>
                    </div>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          {/* Theme Toggle Button */}
          <Button onClick={toggleTheme} className="theme-toggle-btn">
            Toggle {theme === "light" ? "Dark" : "Light"} Theme
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
