import { NavLink } from "react-router-dom"

function NavBar(){


    return (

        <div>
            <nav>
                <NavLink to="/xmas-cards">Home</NavLink>
                <NavLink to="/xmas-cards/cardlist">Cards</NavLink>
            </nav>
            
        </div>
    )



}

export default NavBar;
