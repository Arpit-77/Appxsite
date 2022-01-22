
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Include CSS file
//import './index.css';

// Layout
import Header from "./Component/layout/Header";
import Footer from "./Component/layout/Footer";

// Component
import Home from './Component/home/Home';
import About from './Component/aboutus/aboutus';
import contact from './Component/contactus/contactus';
import courses from './Component/courses/courses';
import angular from './Component/courses/angular/angular';
import react from './Component/courses/react/react';
import news from './Component/news/news';
import element from './Component/element/element';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
     
      <Routes>
        <Route path="/aboutus" exact component={About} /> 
        <Route path="/contactus" exact component={contact} /> 
        <Route path="/courses" component={courses} /> 
        <Route path="/angular" component={angular} /> 
        <Route path="/react" component={react} /> 
        <Route path="/news" component={news} /> 
        <Route path="/"  element={<Home/>} />
        <Route path="/element" component={element} />             
      </Routes> 
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
