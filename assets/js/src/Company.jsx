import React, { Component } from "react";

class Company extends Component {
    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2><b>Company</b></h2>
                        </div>
                    </div>

                    <div className="row">
                        <p>Our professional staff includes three Stanford MBA candidates with years of regulatory, 
                            pharmaceutical and healthcare experience, and a Stanford MS in Bioengineering candidate.
                            We have unique expertise in compliance, machine learning and FDA regulatory affairs,
                            and we are here to put the cutting edge of data analytics into your hands.</p>
                    </div>

                    <div className="row" id="member-row">

                        <div className="col-sm">
                            <h2>Michelle Wu</h2>
                            <div>
                                <img src="assets/img/michelle-wu.jpg" alt="Michelle Wu" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford MBA Candidate '18<br/>
                                Prior: Longitude Capital, Wuxi Ventures, Novartis
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/michelle-wu-gsb/"><b>in</b></a></button>
                            </div>
                        </div>

                        <div className="col-sm">
                            <h2>Andy Wardle, MD</h2>
                            <div>
                                <img src="assets/img/andy-wardle.jpg" alt="Andy Wardle" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford MBA Candidate '19<br/>
                                Prior: Boston Consulting Group
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/andrew-wardle-6a108b68/"><b>in</b></a></button>
                            </div>
                        </div>

                        <div className="col-sm">
                            <h2>Eric Loreaux</h2>
                            <div>
                                <img src="assets/img/eric-loreaux.jpg" alt="Eric Loreaux" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford MS in Bioengineering Candidate '19
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/eric-loreaux-011672b2/"><b>in</b></a></button>
                            </div>
                        </div>

                        <div className="col-sm">
                            <h2>Charlie Reis</h2>
                            <div>
                                <img src="assets/img/charlie-reis.jpg" alt="Charlie Reis" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford MBA Candidate '19<br/>
                                Prior: Abbott Regulatory Affairs
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/charlesrreis/"><b>in</b></a></button>
                            </div>
                        </div>
                    </div>

                    <div className="row" id="member-row">
                        <div className="col-sm">
                            <h2>Abhiram Rao</h2>
                            <div>
                                <img src="assets/img/abhiram-rao.jpg" alt="Abhiram Rao" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford PhD in Bioengineering '20
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/raoabhiram/"><b>in</b></a></button>
                            </div>
                        </div>
                
                        <div className="col-sm">
                            <h2>Kendrick Shen</h2>
                            <div>
                                <img src="assets/img/kendrick-shen.jpg" alt="Kendrick Shen" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford BS in Symbolic Systems Candidate '21
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/kendrickshen/"><b>in</b></a></button>
                            </div>
                        </div>

                        <div className="col-sm">
                            <h2>Ashwin Ramaswami</h2>
                            <div>
                                <img src="assets/img/ashwin-ramaswami.jpg" alt="Ashwin Ramaswami" height="150em" className="rounded-circle"/>
                            </div>
                            <p>
                                Stanford BS in Computer Science Candidate '21<br/>
                                Microsoft Student Partner
                            </p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn"><a id="social" href="https://www.linkedin.com/in/ashwin-r/"><b>in</b></a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Company;