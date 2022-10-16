import React  from 'react';
import { NavLink , Link} from 'react-router-dom';


//stateless functional component

const NavBar = () => {

    console.log("App-rendered");
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
             <Link to='/movies' className="navbar-brand">Vidly</Link>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul className="navbar-nav mr-auto">
                        
                            <li className="nav-item ">
                            <NavLink className="nav-link" to='/movies'>Movies <span className="sr-only">(current)</span></NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink className="nav-link" to="/cutomers">Customers</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink className="nav-link" to="/rental">Rental</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                    </ul>
                
                </div>
</nav>
        );
}

export default NavBar;
 