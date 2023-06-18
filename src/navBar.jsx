import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="title">
            <h3><Link to="/">Filmovi</Link></h3>
            <h3><Link to="/favorites">Omiljeno</Link></h3>
        </div>
    )
}

export default NavBar
