import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home.jsx";
import Vision from "./Vision.jsx";
import Company from "./Company.jsx";

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>

                    <nav className="navbar navbar-top text-uppercase">
                        <a className="navbar-brand" href="index.html">
                            <img src="../../img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
                        </a>
                        <div className="navbar-text navbar-right">
                            <NavLink exact to="/" className="btn" role="button">Home</NavLink>
                            <NavLink to="/Vision" className="btn" role="button">Vision</NavLink>
                            <NavLink to="Company" className="btn" role="button">Company</NavLink>
                            <a href="http://demo.nova-approval.com" className="btn" id="btn-demo" role="button">Launch Demo</a>
                        </div>
                    </nav>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Vision" component={Vision}/>
                        <Route path="/Company" component={Company}/>
                    </div>

                    <nav className="navbar navbar-bottom">
                        <a className="navbar-brand" href="index.html">
                            <img src="../../img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
                        </a>
                        <p>
                            Address<br />
                            Knight Management Center<br />
                            655 Knight Way<br />
                            Stanford, CA 94305
                        </p>
                    </nav>

                </div>
            </HashRouter>
        );
    }
}

export default Main;