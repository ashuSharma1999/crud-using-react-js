import React from "react";
import "./contact.css";
const Contact = () => {
  const submitdata = () => {
    alert("Thank you to contact me.");
  };
  return (
    <div className="container my-3">
      <h2 style={{textAlign:"center"}}>Contact Us</h2>
      <form>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>

        <button className="btn btn-primary" onClick={submitdata}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
