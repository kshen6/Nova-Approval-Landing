import React from 'react';

function Home() {
    return <div>
    <nav className="navbar navbar-top text-uppercase">
    <a className="navbar-brand" href="index.html">
        <img src="assets/img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
    </a>
    <div className="navbar-text navbar-right">
        <a href="#" className="btn" role="button">Vision</a>
        <a href="company.html" className="btn" role="button">Company</a>
        <a href="http://demo.nova-approval.com" className="btn" id="btn-demo" role="button">Launch Demo</a>
    </div>
</nav>

<div className="jumbotron" id="welcome">
    <div>
        <h1 id="welcome-header">Your Digital FDA Consultant</h1>
        <h3 id="welcome-header-2"> Get Approvals Faster, Safer and Cheaper</h3>
    </div>
    <a className="btn text-uppercase btn-welcome" href="http://demo.nova-approval.com">Get Started</a>
</div>

<div className="container body-sect">
        <h2>Say Hello to Lightning-Fast<br /><b>FDA Submission Approvals</b></h2>
        <p>Reach customers faster by securing pre-marketing approvals intuitively and reliably.<br />We'll guide you through the entire submission process, using artificial intelligence to<br />convert decades of FDA submission history into a guide for your company's success.</p>
</div>

<div className="container body-sect">
    <div className="row">
        <div className="col-sm">
            <h2 className="text-center"><b>What We'll Do For You</b></h2>
        </div>
    </div>

    <div className="row text-center">
        <div className="col-sm sub-head">
            <h2>Find Your Predicate</h2>
        </div>
        <div className="col-sm sub-head">
            <h2>Auto-populate Submission Forms</h2>
        </div>
        <div className="col-sm sub-head">
            <h2>Predict Your Exemptions</h2>
        </div>
    </div>

    <div className="row text-center">
        <div className="col-sm">
            <p>Give us a few details about your product, and we will help you determine its predicate along with our estimates of approval time and device classNameification – all in a downloadable, presentable format. Free of charge, no strings attached.</p>
        </div>
        <div className="col-sm">
            <p>We take advantage of decades of documented FDA history to quickly and accurately complete pre-submission and pre-market approval forms using artificial intelligence. Submit confidently and error-free.</p>
        </div>
        <div className="col-sm">
            <p>We can save you valuable turnaround time and money by using intelligent machine learning to predict if your device qualifies for 510(k), investigational device, or any other exemption.</p>
        </div>
    </div>
</div>

<nav className="navbar navbar-bottom">
    <a className="navbar-brand" href="index.html">
        <img src="assets/img/Logo.png" height="50" className="d-inline-block align-top" alt="Nova Approval" />
    </a>
    <p>
        Address<br />
        Knight Management Center<br />
        655 Knight Way<br />
        Stanford, CA 94305
    </p>
</nav>
</div>;
}
export default Home;