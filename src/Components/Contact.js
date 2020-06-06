import React, { useState } from "react";
// import

const Contact = (props) => {
  if (props.data) {
    var name = props.data.name;
    var suburb = props.data.address.suburb;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const changeFromName = (event) => setFromName(event.target.value);
  const changeFromEmail = (event) => setFromEmail(event.target.value);
  const changeFormSubject = (event) => setFormSubject(event.target.value);
  const changeFormMessage = (event) => setFormMessage(event.target.value);

  const onSubmit = () => {
    // emailjs.send("gmail", "template_8RW6Q4vx", {
    //   message: formMessage,
    //   from_name: fromName,
    //   email: fromEmail,
    //   subject: "Test subjectfff",
    // });
    alert("test");
  };
  const handleChange = () => alert("test");
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={changeFromName}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={changeFromEmail}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={changeFormSubject}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={changeFormMessage}
                ></textarea>
              </div>

              <div>
                <button className="submit" onClick={() => onSubmit()}>
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning">
            Error, message not sent. Please try again later.
          </div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Details</h4>
            <p className="address">
              {name}
              <br />
              {/* {street} <br /> */}
              {suburb}, {state} {zip}
              <br />
              {email}
              <br />
              <span>{phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets">
            <h4 className="widget-title">Thank you for reading</h4>
            <ul id="twitter">
              <li>
                <span>
                  I appreciate your interest and I look forward to hearing from
                  you.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
