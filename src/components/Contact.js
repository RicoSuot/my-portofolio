import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [name, set_sender_name] = useState("");
  const [email, set_sender_email] = useState("");
  const [message, set_sender_message] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const handleMessage = (e) => {
    set_sender_message(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send("service_tzto8w8", "template_372rqhk", { name, email, message }, "ZzPm2q8TfyP50Ii8X")
      .then((response) => {
        console.log("Message sent succesfully", response.state, response.text);
      })
      .catch((err) => {
        console.log("failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_sender_message("");
  };
  return (
    <div>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="section-title">
            <h2>Contact</h2>
            <p>If you have any question please fill the from bellow</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Manado, Indonesia</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>ricooliversuot@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+6285256848898</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form className="php-email-form" onSubmit={sendMail}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" value={name} onChange={handleName} className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" id="email" placeholder="Your Email" required />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea name="message" value={message} onChange={handleMessage} className="form-control" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </div>
  );
};

export default Contact;
