const skills = [
  { title: 'UI/UX Design', stop: 93 },
  { title: 'App Development', stop: 80 },
  { title: 'Web Development', stop: 73 },
]

export default function AboutSectionTwo() {
  return (
    <section className="about-section-two" style={{ backgroundImage: 'url(/images/background/3.jpg)' }}>
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="image-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="circle-layer" style={{ backgroundImage: 'url(/images/background/pattern-10.png)' }} />
              <div className="image">
                <img src="/images/resource/about-5.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* Skill Column */}
          <div className="skill-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title light">
                <div className="title">About Globax</div>
                <h2>Transform Your Business With The Leading IT Solution rovider.</h2>
                <div className="text">
                  We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with
                  us.
                </div>
              </div>

              <div className="skills">
                {skills.map((skill) => (
                  <div className="skill-item" key={skill.title}>
                    <div className="skill-header clearfix">
                      <div className="skill-title">{skill.title}</div>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text" data-speed="2000" data-stop={skill.stop}>
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={skill.stop} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="contact.html" className="theme-btn btn-style-two">
                <span className="txt">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
