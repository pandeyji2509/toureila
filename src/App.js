import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Header from './components/Header';
import Testimonial from "./components/testimonials/Testimonial";
import './app.css';
function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
      {/* <NavbarComp/> */}
      <Header/>
      </div>
      <Testimonial className="overlay"/> 
      <Footer/>
    </div>
  );
}
export default App;
