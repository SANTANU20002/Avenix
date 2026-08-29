const facts = [
  { speed: 3000, stop: 40, title: 'ACTIVE CLIENTS', delay: '0ms', alternate: false },
  { speed: 5000, stop: 35, title: 'PROJECTS DONE', delay: '300ms', alternate: true },
  { speed: 2000, stop: 25, title: 'TEAM ADVISORS', delay: '600ms', alternate: false },
  { speed: 3500, stop: 5, title: 'GLORIOUS YEARS', delay: '900ms', alternate: false },
]

export default function CounterSection() {
  return (
    <section className="counter-section">
      <div className="auto-container">
        <div className="inner-container">
          <div className="fact-counter">
            <div className="row clearfix">
              {facts.map((fact) => (
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={fact.title}>
                  <div className="inner wow fadeInLeft" data-wow-delay={fact.delay} data-wow-duration="1500ms">
                    <div className="content">
                      <div className={`count-outer count-box${fact.alternate ? ' alternate' : ''}`}>
                        <span className="count-text" data-speed={fact.speed} data-stop={fact.stop}>
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">{fact.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
