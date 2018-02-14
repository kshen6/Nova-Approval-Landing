import React, { Component } from "react";
import fire from "./fire.js";

import "./Company.scss";

class Company extends Component {
    submitForm(e){
        e.preventDefault();
        //send message to Firebase
        fire.database().ref('contacts').push({ 
            email: this.email.value,
            message: this.message.value
        });
        this.email.value = '';
        this.message.value = '';
        document.getElementById("thankyou-note").innerHTML = "Thank you for contacting us. We'll reply shortly.";
    }

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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/michelle-wu-gsb/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:mwu@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/andrew-wardle-6a108b68/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:awardle@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/eric-loreaux-011672b2/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:eloreaux@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/charlesrreis/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:creis@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/raoabhiram/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:arao@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/kendrickshen/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:kshen@nova-approval.com"></a>
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
                                <a className="btn fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/in/ashwin-r/"></a>
                                <a className="btn fa fa-envelope-o" aria-hidden="true" href="mailto:aramaswami@nova-approval.com"></a>
                            </div>
                        </div>
                    </div>

                </div>

                <form className="js-form" onSubmit={this.submitForm.bind(this)}>
                    <h2>Contact Us</h2>
                    <div className="form-group">
                        <label htmlFor="email1">Email address</label>
                        <input type="email" ref={ el => this.email = el} className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>}
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="message1">Message</label>
                        <input type="text" ref={ el => this.message = el} className="form-control" id="message1" placeholder="Enter message"/>
                        {<small id="emailHelp" className="form-text text-muted">We'll get back to you as soon as possible.</small>}
                    </div>
                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" id="form-submit" className="btn btn-primary">Send Message</button>
                    <h4 id="thankyou-note"></h4>
                </form>

            </div>
        );
    }
}

export default Company;