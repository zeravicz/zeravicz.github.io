import React, { useState } from "react";

const Contact = (props) => {
  if (props.data) {
    var name = props.data.name;
    var suburb = props.data.address.suburb;
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
  const [emailSentStatus, setEmailSentStatus] = useState("notSent");

  const changeFromName = (event) => setFromName(event.target.value);
  const changeFromEmail = (event) => setFromEmail(event.target.value);
  const changeFormSubject = (event) => setFormSubject(event.target.value);
  const changeFormMessage = (event) => setFormMessage(event.target.value);

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };

  const onSubmit = () => {
    if (
      fromName.length !== 0 &&
      fromEmail.length !== 0 &&
      validateEmail(fromEmail) &&
      formMessage.length !== 0
    ) {
      setEmailSentStatus("sending");
      window.emailjs
        .send("gmail", "template_8RW6Q4vx", {
          message: formMessage,
          from_name: fromName,
          email: fromEmail,
          subject: formSubject || "No Subject",
        })
        .then((res) => {
          setEmailSentStatus("sent");
        })
        .catch((err) => setEmailSentStatus("error"));
    } else {
      alert(
        `${
          fromName.length === 0
            ? "Please fill in the name field."
            : fromEmail.length === 0
            ? "Please write your email address."
            : !validateEmail(fromEmail)
            ? "Please enter a valid email address."
            : "Please write a message before clicking submit."
        }`
      );
    }
  };

  const renderEmptyForm = () => {
    setFromName("");
    setFromEmail("");
    setFormSubject("");
    setFormMessage("");
    setEmailSentStatus("notSent");
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span></span>
          </h1>
        </div>

        <div className="ten columns">
          <h2 className="lead">Kontakt</h2>

          <p>
          <br/>
          Vaše dotazy rádi zodpovíme telefonicky nebo e-mailem.
          </p>
          <h3 className="lead">📞 <a href="tel:+420773928983">+420 773 928 983</a></h3>
          <p>Telefonáty od realitních kanceláří přijímáme za 300,- Kč/min.</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {emailSentStatus === "notSent" || emailSentStatus === "sending" ? (
            <div>
              <div>
                <label htmlFor="contactName">
                  Jméno a příjmení <span className="required">*</span>
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
                  E-mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={changeFromEmail}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Telefon</label>
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
                  Zpráva <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={changeFormMessage}
                ></textarea>
              </div>

              <div className="buttonContainer">
                <button className="submit" onClick={() => onSubmit()}>
                  Odeslat
                </button>
                {emailSentStatus === "sending" && (
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/loader.gif"}
                    style={{ position: "relative", top: "18px", left: "10px" }}
                  />
                )}
              </div>
            </div>
          ) : emailSentStatus === "sent" ? (
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
              <button
                className="renderForm"
                onClick={() => renderEmptyForm()}
                style={{ marginTop: "10px" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <div id="message-warning">
              Error has occured, message not sent. Please try again later.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
