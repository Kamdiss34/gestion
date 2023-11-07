import React from "react";
import "./Sidebar.css";
import{Link} from 'react-router-dom';
import{Nav, Navbar,Container, NavDropdown } from 'react-bootstrap';


const Sidebar = () => {
    return (
    <main className='space-toggle'>
        <header className=''>
        <div className=''>
            
        <Navbar collapseOnSelect expand="lg" className="navb">
      <Container>
        <Navbar.Brand href="#home">
        <a href="/">
        <img class="logo" src="logo192.png" alt="logo"/>
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another actions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>    
             
        </header>
    <aside className='sidebar show'>
        <nav className='nav'>
        <div>
            <Link to="/" className='nav-link'>
                <i className='fas fa-home-alt nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            <div className="nav-list">
            <Link to="/dashboard" className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className="nav-link-name"></span>  
           
            </Link>
            <Link to="/hotel" className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className="nav-link-name"></span>  
           
            </Link>
            <Link to="/gallery" className="nav-link">
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            <Link to="/gallery" className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            <Link to="/logout" className='nav-link'>
                <i className='fas fa-sign-out nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            </div>
        </div>
        </nav>
    </aside >
    <h1>Content</h1>
    </main>
    );
}
  
        
  
  
  export default Sidebar;