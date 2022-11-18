import React from "react";
import imageAbout from "../assets/img/about.jpg";

const About = () => {
  return (
    <div>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Perkenalkan nama saya Rico Suot, Sarjana Komputer dari STMIK Parnaraya Manado. Saya sangat hobi dalam membuat dan mendesign website juga belajar secara otodidak untuk lebih mengembangkan keterampilan saya dalam dunia IT sambil
              memperkuat yang sudah saya miliki
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={imageAbout} className="img-fluid" alt="foto about" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Frontend Web Developer</h3>
              <p className="fst-italic">Berikut detail tentang saya</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 2 Jan 1994
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Github:</strong> User: RicoSuot
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Phone:</strong> 0852 5684 8898
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>City:</strong> Manado, Indonesia
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Age:</strong> 28
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Junior
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Email:</strong> ricooliversuot@gmail.com
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Bagi saya, menjadi Front End Web Developer merupakan salah satu impian saya. Alasan mengapa saya berkeinginan untuk berkarir di bidang ini untuk memiliki kesempatan belajar berbagai hal lebih dalam mengenai Front End
                Developer. Menjadi seorang Front End Developer memberikan kesempatan juga untuk bertemu dengan bermacam orang dari berbagai industri dan passion yang sama.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  React JS <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Bootstrap <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Skills Section --> */}
    </div>
  );
};

export default About;
