const testimonials = [
  { icon: 'testimonial-icon-1.png', name: 'Steelart' },
  { icon: 'testimonial-icon-2.png', name: 'Figma Skills' },
  { icon: 'testimonial-icon-1.png', name: 'Steelart' },
  { icon: 'testimonial-icon-2.png', name: 'Figma Skills' },
  { icon: 'testimonial-icon-1.png', name: 'Steelart' },
  { icon: 'testimonial-icon-2.png', name: 'Figma Skills' },
]

const quote =
  '"Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!."'

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="auto-container">
        <div className="sec-title">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title">LATEST CASE STUDIES</div>
              <h2>
                Reads Now Our Recent <br /> Projects Studies
              </h2>
            </div>
            <div className="pull-right">
              <div className="text">
                Our goal is to help our companies maintain or achieve best- in-class <br /> positions in their respective industries and our team works.
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-carousel owl-carousel owl-theme">
          {testimonials.map((t, i) => (
            <div className="testimonial-block" key={i}>
              <div className="inner-box" style={{ backgroundImage: 'url(/images/background/pattern-4.png)' }}>
                <div className="upper-box">
                  <div className="icon">
                    <img src={`/images/resource/${t.icon}`} alt="" />
                  </div>
                  <h4>{t.name}</h4>
                  <div className="designation">Client of Company</div>
                </div>
                <div className="text">{quote}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lower-text">
          More than 5k customers share their thoughts to us. . . <a href="testimonial.html">Read All Reviews</a>
        </div>
      </div>
    </section>
  )
}
