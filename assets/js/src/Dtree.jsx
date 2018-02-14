import React, { Component } from "react";
import "./Dtree.scss";

class Dtree extends Component {
    render () {
        return (
            <div>
                <div className="row" id="tree-row">
                    <div className="col-sm">
                        <h4>Predicator</h4>
                        <p>Classification - - - Timeline - - - Pathway</p>
                    </div>
                </div>
                <div className="row" id="tree-row">
                    <div className="col-sm">
                        <h4>Class I</h4>
                        <p>Mostly likely exempt</p>
                    </div>
                    <div className="col-sm">
                        <h4>Class II</h4>
                        <p>510(k)</p>
                        <p>Traditional - - - Abbreviated - - - Special</p>
                    </div>
                    <div className="col-sm">
                        <h4>Class III</h4>
                        <p>Pre-Market Submission</p>
                        <p>30-day notice - - - PMA - - - Something else</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dtree;