import React, { Fragment } from "react";
import { Navbar, Nav, NavItem, Button, NavLink } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import ProfileModal from '../auth/ProfileModal';
import Logo from './logo1.png'
import { logout } from '../../js/actions/authActions';
import{profileUser} from "../../js/actions/authActions";

import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const profile=()=>{
    dispatch(profileUser());
  }
  return (
    <Navbar className="d-flex justify-content-between navbar-navbar-default navbar-fixed-top" color="dark" dark>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<img
				className="ml-5"
				src={Logo}
				alt="topbar-logo"
				style={{ height:"60px" , width:"60px"}}
				
			/>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'dark',
							}}
							activeClassName="nav-style"
							className="nav-link a mr-3"
							href="/"
						>
							Home
						</a>
					</li>
					
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'dark',
							}}
							className="nav-link a mr-3"
							href="#work"
						>
							
							Our Portfolio
						</a>
					</li>
					
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link a mr-3"
							href="#contact"
						>
							Contact us
							
						</a>
					</li>
					
				</ul>
			</div>
		</nav>
      <Nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        {isAuth ? (
          <Fragment>
            
             <NavLink href="#" onClick={profile}>
        {' '}
        <NavItem>
          
        <ProfileModal />

      </NavItem>
	
</NavLink>
<NavItem>
        <Link to="/profile">
          <span className="navbar-text mr-3" >
            <strong>{user ? `Welcome ${user.name}` : null}</strong>
          </span>
        </Link>    
      </NavItem>
  
            <NavItem className="p-2">
             
                <Link to="/listvisiteurs">Go To Service</Link>
          
            </NavItem>
           
            <NavItem >
        <Link to="/admin"> 
        <span className="navbar-text mr-4"><strong>   Admin </strong> </span>
        </Link> 
        </NavItem> 
        
            
            <NavLink     onClick={()=>dispatch(logout())}>
        {' '}
        Logout
      </NavLink>
        
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <LoginModal />
            </NavItem>
            <NavItem className="p-2">
              <RegisterModal />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;