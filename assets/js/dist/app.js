webpackJsonp([0],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5b7048b6b6d7a16ba98b5a567447351.scss";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a6648a661596879dd70aed0edc82c4a5.scss";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7025da3783fdbb063208e26bfbc1aa6b.scss";

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Main__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Main_scss__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_scss__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Home_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Vision_scss__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Vision_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Vision_scss__);








__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Main__["a" /* default */], null)
), document.getElementById('root'));

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_jsx__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Vision_jsx__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Team_jsx__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dtree_jsx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Main_scss__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_scss__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Home_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Vision_scss__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Vision_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Vision_scss__);












class Main extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* HashRouter */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "nav",
                    { className: "navbar", id: "navbar-top" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* NavLink */],
                        { exact: true, to: "/", className: "navbar-brand" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "./assets/img/Logo.png", height: "50", className: "d-inline-block align-top", alt: "Nova Approval" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "navbar-text navbar-right" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* NavLink */],
                            { to: "/Vision", className: "btn", role: "button" },
                            "Vision"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* NavLink */],
                            { to: "/Team", className: "btn", role: "button" },
                            "Team"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { href: "#", className: "btn not-active", id: "btn-demo", role: "button" },
                            "Launching Soon"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "content" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { exact: true, path: "/", component: __WEBPACK_IMPORTED_MODULE_2__Home_jsx__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/Vision", component: __WEBPACK_IMPORTED_MODULE_3__Vision_jsx__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/Team", component: __WEBPACK_IMPORTED_MODULE_4__Team_jsx__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/Dtree", component: __WEBPACK_IMPORTED_MODULE_5__Dtree_jsx__["a" /* default */] })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "nav",
                    { className: "navbar", id: "navbar-bottom" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* NavLink */],
                        { exact: true, to: "/", className: "navbar-brand" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "./assets/img/Logo.png", height: "50", className: "d-inline-block align-top", alt: "Nova Approval" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-twitter", href: "https://twitter.com/nova_approval" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-linkedin", href: "https://www.linkedin.com/Team/nova-approval/" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "navbar-text" },
                        "Address",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                        "Knight Management Center",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                        "655 Knight Way",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                        "Stanford, CA 94305"
                    )
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Home extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "jumbotron", id: "welcome" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h1",
                        { id: "welcome-header" },
                        "Your Digital FDA Consultant"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        { id: "welcome-header-2" },
                        "Get the Information You Need Faster, Safer and Cheaper"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "btn not-active", id: "btn-welcome", href: "#" },
                    "Launching Soon"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", id: "left-text" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    null,
                    "Say Hello to Lightning-Fast",
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "b",
                        null,
                        "FDA Submission Approvals"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    null,
                    "Reach customers faster by securing pre-marketing approvals intuitively and reliably.",
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                    "We'll guide you through the entire submission process, using advanced data science and machine learning to",
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                    "convert decades of FDA submission history into a guide for your company's success."
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", id: "video" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { src: "https://www.youtube.com/embed/SFCC9wNRTNY", frameBorder: "0" })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", id: "left-text" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "./assets/img/SE-form.png", id: "SE-form", alt: "Submission Form" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm-8" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "b",
                                null,
                                "We Stand For Your Success"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "At Nova Approval, we are developing a powerful, free data analytics engine for your unlimited use as you move prepare you submission documents. With our intuitive and interactive visualizations, we will help you find your predicate device quickly and accurately. ",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                            "We will help you to increase regulatory success using machine learning to automate at least 20% of your labor-intensive submission tasks.* Using our smart and lean approach, we will ensure you minimize your share of the $4.6 billion spent annually on traditional regulatory consultants.",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                            "The average FDA submission can take anywhere from 6 months to 3 years to obtain approval."
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "b",
                                null,
                                "What We'll Do For You"
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row", id: "services" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Find Your Predicate"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "Give us a few details about your product, and we will help you determine its predicate along with our estimates of approval time and device classification \u2013 all in a downloadable, presentable format. Free of charge, no strings attached."
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Auto-populate Submission Forms"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "We take advantage of decades of documented FDA history to quickly and accurately complete pre-submission and pre-market approval forms using artificial intelligence. Submit confidently and error-free."
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Predict Your Exemptions"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "We can save you valuable turnaround time and money by using intelligent machine learning to predict if your device qualifies for 510(k), investigational device, or any other exemption."
                        )
                    )
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Vision extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container body-sect" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    null,
                    "Vision"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    null,
                    "At Nova Approval, we are developing a powerful, interactive data analytics engine for your custonized use, whether you are preparing your submission documents or planning your development strategy. With our intuitive and interactive visualizations, we will help you find your predicate device quickly and accurately.",
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                    "We are a team of diverse and determined individuals, all sharing a vision for success. We believe that our data science and artificial intelligence technology has the potential to disrupt the FDA regulatory submissions process and to dramatically improve the time it takes pharmaceutical and medical device companies to bring their products to the market to reach more patients in need.",
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                    "We are uniquely positioned as a global leader in medical device FDA approval knowledge. At Nova Approval, we provide you with an authoritative source for powerful regulatory content and product registration data. We link clinical outcomes with the final commercial forecast to help you manage your business from end to end."
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Vision);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fire_js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Team_scss__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Team_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Team_scss__);





class Team extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    submitForm(e) {
        e.preventDefault();
        //send message to Firebase
        __WEBPACK_IMPORTED_MODULE_1__fire_js__["a" /* default */].database().ref('contacts').push({
            email: this.email.value,
            message: this.message.value
        });
        this.email.value = '';
        this.message.value = '';
        document.getElementById("thankyou-note").innerHTML = "Thank you for contacting us. We'll reply shortly.";
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "b",
                                null,
                                "Team"
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "Our professional staff includes three Stanford MBA candidates with years of regulatory, pharmaceutical and healthcare experience, and a Stanford MS in Bioengineering candidate. We have unique expertise in compliance, machine learning and FDA regulatory affairs, and we are here to put the cutting edge of data analytics into your hands."
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row", id: "member-row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Michelle Wu"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "assets/img/michelle-wu.jpg", alt: "Michelle Wu", height: "150em", className: "rounded-circle" })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "Stanford MBA Candidate '18",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                            "Prior: Novartis, Longitude Capital, Wuxi Ventures"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "btn-group", role: "group" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-linkedin", "aria-hidden": "true", href: "https://www.linkedin.com/in/michelle-wu-gsb/" }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-envelope-o", "aria-hidden": "true", href: "mailto:danw2@nova-approval.com" })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Eric Loreaux"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "assets/img/eric-loreaux.jpg", alt: "Eric Loreaux", height: "150em", className: "rounded-circle" })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "Stanford MS in Bioengineering Candidate '19"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "btn-group", role: "group" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-linkedin", "aria-hidden": "true", href: "https://www.linkedin.com/in/eric-loreaux-011672b2/" }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-envelope-o", "aria-hidden": "true", href: "mailto:eloreaux@nova-approval.com" })
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row", id: "member-row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Kendrick Shen"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "assets/img/kendrick-shen.jpg", alt: "Kendrick Shen", height: "150em", className: "rounded-circle" })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "Stanford BS in Symbolic Systems Candidate '21"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "btn-group", role: "group" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-linkedin", "aria-hidden": "true", href: "https://www.linkedin.com/in/kendrickshen/" }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-envelope-o", "aria-hidden": "true", href: "mailto:kshen@nova-approval.com" })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-sm" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            null,
                            "Ashwin Ramaswami"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "assets/img/ashwin-ramaswami.jpg", alt: "Ashwin Ramaswami", height: "150em", className: "rounded-circle" })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            null,
                            "Stanford BS in Computer Science Candidate '21",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                            "Microsoft Student Partner"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "btn-group", role: "group" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-linkedin", "aria-hidden": "true", href: "https://www.linkedin.com/in/ashwin-r/" }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "btn fa fa-envelope-o", "aria-hidden": "true", href: "mailto:aramaswami@nova-approval.com" })
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "form",
                { className: "js-form", onSubmit: this.submitForm.bind(this) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    null,
                    "Contact Us"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "label",
                        { htmlFor: "email1" },
                        "Email address"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "email", ref: el => this.email = el, className: "form-control", id: "email1", "aria-describedby": "emailHelp", placeholder: "Enter email" }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "small",
                        { id: "emailHelp", className: "form-text text-muted" },
                        "We'll never share your email with anyone else."
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "label",
                        { htmlFor: "message1" },
                        "Message"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", { type: "text", rows: "2", ref: el => this.message = el, className: "form-control", id: "message1", placeholder: "Enter message" }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "small",
                        { id: "emailHelp", className: "form-text text-muted" },
                        "We'll get back to you as soon as possible."
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { type: "submit", id: "form-submit", className: "btn btn-primary" },
                    "Send Message"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", { id: "thankyou-note" })
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Team);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


var config = {
    apiKey: "AIzaSyAOMv1GAinD6vuSpM849mPyu8iDQrFaueE",
    authDomain: "nova-approval.firebaseapp.com",
    databaseURL: "https://nova-approval.firebaseio.com",
    projectId: "nova-approval",
    storageBucket: "nova-approval.appspot.com",
    messagingSenderId: "954045747720"
};

var fire = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);
/* harmony default export */ __webpack_exports__["a"] = (fire);

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d26d139562dfe73a3629ccee43d04ac2.scss";

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dtree_scss__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dtree_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Dtree_scss__);



class Dtree extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "row", id: "tree-row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-sm" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "Predicator"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "Classification - - - Timeline - - - Pathway"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "row", id: "tree-row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-sm" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "Class I"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "Mostly likely exempt"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-sm" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "Class II"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "510(k)"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "Traditional - - - Abbreviated - - - Special"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-sm" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "Class III"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "Pre-Market Submission"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "30-day notice - - - PMA - - - Something else"
                    )
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Dtree);

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a82a2e251ec62e5d72b57a83f4ca41a1.scss";

/***/ })

},[183]);