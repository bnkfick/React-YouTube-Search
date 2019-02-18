import React from "react";
import { Container } from "reactstrap";


const NavBar = () => {
    return (

        <header>
            <Container>
                <nav className="navbar" id="topnav">
                    <div className="brand">
                        <h1>YouTube Video Search</h1>
                    </div>

                </nav>
            </Container>
        </header>


        /* < nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <a href className="navbar-brand" to="/">Pupster</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <a href className="nav-link" to="/">About</a>
                    </li>
                    <li className="nav-link">
                        <a href className="nav-link" to="/discover">Discover</a>
                    </li>
                    <li className="nav-link">
                        <a href className="nav-link" to="/search">Search</a>
                    </li>
                </ul>
            </div>
        </nav > */
    )
}

export default NavBar;
