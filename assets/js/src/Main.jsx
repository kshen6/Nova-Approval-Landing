import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import Home from "./Home.jsx";
import Vision from "./Vision.jsx";
import Company from "./Company.jsx";

import "./Main.scss";
import "./Home.scss";
import "./Vision.scss";
import "./Company.scss";

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>

                    <nav className="navbar" id="navbar-top">
                        <NavLink exact to="/" className="navbar-brand">
                            <img src="./assets/img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
                        </NavLink>
                        <div className="navbar-text navbar-right">
                            <NavLink to="/Vision" className="btn" role="button">Vision</NavLink>
                            <NavLink to="/Company" className="btn" role="button">Company</NavLink>
                            <a href="http://demo.nova-approval.com" className="btn" id="btn-demo" role="button">Demo</a>
                        </div>
                    </nav>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Vision" component={Vision}/>
                        <Route path="/Company" component={Company}/>
                    </div>

                    <nav className="navbar" id="navbar-bottom">
                        <NavLink exact to="/" className="navbar-brand">
                            <img src="./assets/img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
                        </NavLink>
                        <div>
                            <a className="btn fa fa-twitter" href="https://twitter.com/nova_approval"></a>
                            <a className="btn fa fa-linkedin" href="https://www.linkedin.com/company/nova-approval/"></a>
                        </div>
                        <p className="navbar-text">
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