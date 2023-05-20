import React from "react";
import './App.css';
export default function Header(){
    return(
        <>
        <nav id='nav' class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
       <div class="container-fluid">
    <p id="logo">Ninestars</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#vol">About</a>
        <a class="nav-link" href="#op">Services</a>
        <a class="nav-link" href="#por">Portfolio</a>        
        <a class="nav-link" href="#team">Team</a>
        <a class="nav-link" href="#contact">Contact</a>
        <button id="btn" className="btn">Get Started</button>
      </div>
    </div>
  </div>
</nav>
</>
    )
}