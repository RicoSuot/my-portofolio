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
      {" "}
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p>If you’d like to chat about me or just have question, please fill in the form below</p>
          </div>

          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Manado, Indonesia</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>ricooliversuot@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+6285256848898</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form class="php-email-form" onSubmit={sendMail}>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" value={name} onChange={handleName} class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" name="email" value={email} onChange={handleEmail} class="form-control" id="email" placeholder="Your Email" required />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <textarea name="message" value={message} onChange={handleMessage} class="form-control" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
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
