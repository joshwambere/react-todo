import React, { Component } from 'react';
import '../App.css'



class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navs">
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <div >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item p-2">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item  p-2">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;