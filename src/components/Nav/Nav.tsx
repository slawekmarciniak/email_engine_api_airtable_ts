import {FC} from 'react'
import {NavLink} from "react-router-dom";

import './style.css'


interface NavProps {
    
}
 
const Nav: FC<NavProps> = () => {
    return (
<div className="navContainer">
<nav>
            <ul>
                <li>
                    <NavLink exact to="/">Subscribers</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add Subscriber</NavLink>
                </li>
                <li>
                    <NavLink to="/campaign">campaign</NavLink>
                </li>
                <li>
                    <NavLink to="/email">create campaign</NavLink>
                </li>
            </ul>
        </nav>
</div>
        
     );
}

export default Nav;