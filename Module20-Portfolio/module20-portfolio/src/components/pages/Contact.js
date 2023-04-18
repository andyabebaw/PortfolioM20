import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 id="header">Contact Page</h1>
      <hr/>
      <div class="pageBody">
        <p>Please reach out at the email below with any questions.</p>
        <p>Email: AndyAbebaw1@Gmail.com</p>
        <div id="contact">
          <label>
            Name:
          </label>
          <br />
          <input type="text" name="name" />
          <br />
          <br />
          <label>
            Email Address
          </label>
          <br />
          <br />
          <input type="text" name="email" />
          <br />
          <br />
          <label>
            Message
          </label>
          <br />
          <textarea name="message" cols="40" rows="5"></textarea>

          <br />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
