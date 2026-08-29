import React from "react";

export default function ContactUsSection() {
  return (
    <section className="appointment-section style-two">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/1.jpg)" }}
      ></div>
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title light centered">
          <div className="title">CONTACT US</div>
          <h2>
            Join Us To Get IT Free <br /> Consultations
          </h2>
        </div>
        <div className="inner-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow slideInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src="images/resource/appointment.jpg" alt="" />
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h4>
                  You Don't Hesitate To Contact <br /> With Us, Now Say
                  Hello......
                </h4>
                {/* Appointment Form */}
                <div className="appointment-form">
                  <form method="post" action="appointment.html">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Name"
                          required
                        />
                        <span className="icon fa fa-user"></span>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <span className="icon fa fa-envelope"></span>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No"
                          required
                        />
                        <span className="icon fa fa-phone"></span>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="department"
                          placeholder="Department"
                          required
                        />
                        <span className="icon fa fa-home"></span>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button
                          className="theme-btn btn-style-three"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="txt">Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Form Column */}
          </div>
        </div>
      </div>
    </section>
  );
}