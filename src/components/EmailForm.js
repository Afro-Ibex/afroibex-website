import React, { useState } from "react";
import "./emailForm.css";
import emailJs from "emailjs-com";
import emailKey from "./emailKey";

function EmailForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    try {
      console.log(message);
      await emailJs.send(
        "service_liqeq1w",
        emailKey.TEMPLATE_ID,
        {
          fullname,
          email,
          message,
        },
        emailKey.USER_ID
      );
      alert("Email Successfully Sent");
    } catch (e) {
      alert("An Error Occured While Sending an Email");
      console.log(e.message);
    }
  };

  return (
    <div className="emailForm">
      <div class="wrapper">
        <h1>CONTACT US</h1>
        <form action="" method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div class="form-group">
            {/* <label for="name">Full Name</label> */}
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              name="fullName"
              id="name"
              placeholder="Full Name "
              required
              minlength="3"
              maxlength="25"
            />
          </div>
          <div class="form-group">
            {/* <label for="email">Email Address</label> */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="Email"
              id="email"
              placeholder="email@domain.tld"
              required
            />
          </div>
          <div class="form-group">
            {/* <label for="message">Message</label> */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="Message"
              id="message"
              rows="5"
              placeholder="Type your message here...."
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="submit">
              <i class="far fa-paper-plane"></i>Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;