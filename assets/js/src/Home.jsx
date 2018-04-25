import React, { Component } from "react";

class Home extends Component {
    render () {
        return (
            <div>
                <div className="jumbotron" id="welcome">
                    <div>
                        <h1 id="welcome-header">Your Digital FDA Consultant</h1>
                        <h3 id="welcome-header-2">Get the Information You Need Faster, Safer and Cheaper</h3>
                    </div>
                    <a className="btn" id="btn-welcome" href="#">Launching Soon</a>
                </div>

                <div className="container" id="left-text">
                    <h2>Say Hello to Lightning-Fast<br /><b>FDA Submission Approvals</b></h2>
                    <p>
                        Reach customers faster by securing pre-marketing approvals intuitively and reliably.
                        <br />We'll guide you through the entire submission process, using advanced data
                        science and machine learning to<br />convert decades of FDA submission history 
                        into a guide for your company's success.
                    </p>
                </div>

                <div className="container" id="video">
                    <iframe src="https://www.youtube.com/embed/SFCC9wNRTNY" frameBorder="0"></iframe>
                </div>

                <div className="container" id="left-text">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="./assets/img/SE-form.png" id="SE-form" alt="Submission Form"/>
                        </div>
                        <div className="col-sm-8">
                            <h2><b>We Stand For Your Success</b></h2>
                            <p>
                                At Nova Approval, we are developing a powerful, free data analytics engine for your unlimited use
                                as you move prepare you submission documents. With our intuitive and interactive visualizations, 
                                we will help you find your predicate device quickly and accurately. <br />
                                
                                We will help you to increase regulatory success using machine learning to 
                                automate at least 20% of your labor-intensive submission tasks.* Using our
                                smart and lean approach, we will ensure you minimize your share of the $4.6 
                                billion spent annually on traditional regulatory consultants.<br /><br />
                                The average FDA submission can take anywhere from 6 months to 3 years to obtain 
                                approval.
                            </p>
                            <a className="btn" id="btn-welcome" href="http://demo.nova-approval.com">Get Started Today</a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2><b>What We'll Do For You</b></h2>
                        </div>
                    </div>

                    <div className="row" id="services">
                        <div className="col-sm">
                            <h2>Find Your Predicate</h2>
                            <p>Give us a few details about your product, and we will help you determine its predicate along with our estimates of approval time and device classification – all in a downloadable, presentable format. Free of charge, no strings attached.</p>
                        </div>
                        <div className="col-sm">
                            <h2>Auto-populate Submission Forms</h2>
                            <p>We take advantage of decades of documented FDA history to quickly and accurately complete pre-submission and pre-market approval forms using artificial intelligence. Submit confidently and error-free.</p>
                        </div>
                        <div className="col-sm">
                            <h2>Predict Your Exemptions</h2>
                            <p>We can save you valuable turnaround time and money by using intelligent machine learning to predict if your device qualifies for 510(k), investigational device, or any other exemption.</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;