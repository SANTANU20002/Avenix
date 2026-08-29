import React, { useState } from 'react'

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend.
    setSubmitted(true)
    // Reset form or keep data based on UX preference
    setFormData({
      username: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="contact-map-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title">
          <div className="row clearfix">
            <div className="col-md-6 pull-left col-12">
              <div className="title">SEND YOUR MESSAGE</div>
              <h2>Send Your Message</h2>
            </div>
            <div className="col-md-6 pull-right">
              <div className="text">
                Our goal is to help our companies maintain or achieve best-in-class{' '}
                positions in their respective industries and our team works.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit} id="contact-form" autoComplete="off">
            <div className="row clearfix">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="username">Your name *</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder=""
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="phone">Phone number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="subject">Website</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=""
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group text-center col-lg-12 col-md-12 col-sm-12">
                <button
                  className="theme-btn btn-style-three"
                  type="submit"
                  name="submit-form"
                >
                  <span className="txt">Send Now</span>
                </button>
              </div>

              {submitted && (
                <div className="form-group text-center col-lg-12 col-md-12 col-sm-12" style={{ color: 'green', fontWeight: 'bold', marginTop: '1rem' }}>
                  Thank you for reaching out! We have received your message.
                </div>
              )}
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </section>
  )
}