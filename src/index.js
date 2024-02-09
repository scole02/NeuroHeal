// /*!

// =========================================================
// * Light Bootstrap Dashboard React - v2.0.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import ReactDOM from "react-dom/client";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import AdminLayout from "layouts/Admin.js";
// //import LandingPage from "landing";
// const LandingPage = React.lazy(() =>
//   import(/* webpackChunkName: "landing" */ './landing').then((module) => ({ default: module.default })),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(
//   <BrowserRouter>
//     <Switch>
//       {/* //<Route exact path="/landing" components={LandingPage} /> */}
//       <Route
//         exact
//         path={[
//           '/landing',
//         ]}
//         render={() => (

//           <LandingPage />

//         )}
//       />
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </BrowserRouter>
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import AdminLayout from 'layouts/Admin.js';

// const LandingPage = React.lazy(() =>
//   import(/* webpackChunkName: "landing" */ './landing').then((module) => ({ default: module.default })),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/landing" render={() => <LandingPage />} />
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/landing" />
//     </Switch>
//   </BrowserRouter>
// );

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin.js';
import Login from './Cpage/Clog'
import LoginP from './PPage/PLog';
import Chatbot from 'PPage/Chatbot';
//import App from './alzi_frontend/src/App.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LandingPage = React.lazy(() => import('./landing'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/landing" component={LandingPage} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route exact path="/Clog" component ={Login}/> 
        <Route exact path="/Plog" component ={LoginP}/>
        <Route exact path="/Chatbot" component ={Chatbot}/>
        <Redirect from="/" to="/landing" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

