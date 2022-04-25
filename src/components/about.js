import React from 'react'
import './about.css';
const About = () => {
  return (
    <>
    <div className="about-section my-2">
  <h1>About Us</h1>
  <p>This is our team who develope this project.</p>
  
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={require("./images/b.jpg")} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Ashvini Sharma</h2>
        <p className="title">CEO and Founder</p>
        <p>Inter of CRMNEXT</p>
        <p>ashviniSharma@crmnext.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={require("./images/c.jpg")}alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Shashank kumar</h2>
        <p className="title">CEO and Founder</p>
        <p>Inter of CRMNEXT</p>
        <p>shashankKumar@crmnext.com</p><p>
        <button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={require("./images/a.jpg")} alt="John" style={{width:"100%"}}/>
      <div className="container">
      <h2>Abhishek kumar</h2>
        <p className="title">CEO and Founder</p>
        <p>Inter of CRMNEXT</p>
        <p>abhishekKumar@crmnext.com</p><p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About