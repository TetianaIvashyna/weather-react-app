import React from "react";

export default function Hamburger(props) {
    return(
        <div className="Hamburger">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h3>{props.city}</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Current Location</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 My Cities
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Kharkiv</a></li>
                                    <li><a className="dropdown-item" href="/">Kyiv</a></li> 
                                    <li><a className="dropdown-item" href="/">Eindhoven</a></li>
                                    <li><a className="dropdown-item" href="/">Amsterdam</a></li>
                                </ul>
                            </li>
                            <li>
                             
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="City" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}