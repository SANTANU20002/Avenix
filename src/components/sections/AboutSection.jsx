export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="sec-title">
          <div className="title">ABOUT COMPANY</div>
          <h2>
            We Turn Ideas Into <br />
            Digital Experiences.
          </h2>
        </div>
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="text">
                In today&rsquo;s digital world, your website is more than just an online presence&mdash;it&rsquo;s a powerful tool for building trust, attracting customers, and growing your business. We combine creative design, modern
                technology, and strategic thinking to build digital solutions that are fast, scalable, and built around your goals.
              </div>
              <div className="blocks-outer">
                <div className="feature-block">
                  <div className="inner-box">
                    <div className="icon">
                      <img src="/images/icons/tech.png" alt="tech" />
                    </div>
                    <h6>Creative Technology</h6>
                    <div className="feature-text">
                      We blend thoughtful UI/UX design with modern development to create digital experiences that look great and perform even better.
                    </div>
                  </div>
                </div>

                <div className="feature-block">
                  <div className="inner-box">
                    <div className="icon">
                      <img src="/images/icons/support.png" alt="support" />
                    </div>
                    <h6>Reliable Support</h6>
                    <div className="feature-text">
                      From the first idea to launch and beyond, we work closely with you to solve challenges, improve your digital presence, and keep your technology moving forward.
                    </div>
                  </div>
                </div>
              </div>

              {/* <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image theme-btn btn-style-one">
                <span className="txt">
                  <i className="play-icon" />
                  &ensp; Read More
                </span>
              </a> */}
            </div>
          </div>

          {/* Images Column */}
          <div className="images-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" style={{ backgroundImage: 'url(/images/icons/globe.png)' }}>
              <div className="pattern-layer" style={{ backgroundImage: 'url(/images/background/pattern-1.png)' }} />
              <div className="images-outer parallax-scene-1">
                <div className="image" data-depth="0.10">
                  <img src="/images/resource/about-1.jpg" alt="" />
                </div>
                <div className="image-two" data-depth="0.30">
                  <img src="/images/resource/about-2.jpg" alt="" />
                </div>
                <div className="image-three" data-depth="0.20">
                  <img src="/images/resource/about-3.jpg" alt="" />
                </div>
                <div className="image-four" data-depth="0.30">
                  <img src="/images/resource/about-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
