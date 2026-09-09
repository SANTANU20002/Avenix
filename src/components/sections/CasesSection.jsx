const cases = [
  { image: '1.jpg', size: 'col-lg-4 col-md-6 col-sm-12' },
  { image: '2.jpg', size: 'col-lg-4 col-md-6 col-sm-12' },
  { image: '3.jpg', size: 'col-lg-4 col-md-6 col-sm-12' },
  { image: '4.jpg', size: 'col-lg-6 col-md-12 col-sm-12' },
  { image: '5.jpg', size: 'col-lg-6 col-md-12 col-sm-12' },
]

export default function CasesSection() {
  return (
    <section className="cases-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="title">LATEST CASE STUDIES</div>
          <h2>
            Reads Now Our Recent <br /> Projects Studies
          </h2>
        </div>
        <div className="row clearfix">
          {cases.map((item) => (
            <div className={`case-block ${item.size}`} key={item.image}>
              <div className="inner-box">
                <div className="image">
                  <img src={`/images/gallery/${item.image}`} alt="" />
                  <div className="overlay-box">
                    <a href={`/images/gallery/${item.image}`} data-fancybox="case" data-caption="" className="search-icon">
                      <i className="fa fa-search" />
                    </a>
                    <div className="content">
                      <h4>
                        <a href="projects">Social Media App</a>
                      </h4>
                      <div className="category">Ideas / Technology</div>
                    </div>
                    <a href="projects" className="arrow ">
                      <span className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="section-text">ne More Than 1K Projects in Last 3 Years, With 100% Satisfaction.</div>

        <div className="btn-box text-center">
          <a href="#" className="theme-btn btn-style-three">
            <span className="txt">View All</span>
          </a>
        </div> */}
      </div>
    </section>
  )
}
