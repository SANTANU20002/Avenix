const steps = [
  { number: '01', title: 'Discover', text: 'We understand your goals, audience, and project requirements.' },
  { number: '02', title: ' Plan', text: 'We define the strategy, features, technology, and project roadmap.' },
  { number: '03', title: 'Design', text: 'We create clean, intuitive, and engaging user experiences.' },
  { number: '04', title: 'Develop', text: 'We build your solution with clean, scalable, and reliable code.' },
  { number: '05', title: 'Launch', text: 'We test, optimize, and launch your project with confidence.' },
  { number: '06', title: 'Grow', text: 'We provide support that grows with you.' },
]

export default function ProcessSection() {
  return (
    <section className="services-section-two margin-top">
      <div className="auto-container">
        <div className="upper-box">
          <div className="icon-one" style={{ backgroundImage: 'url(/images/icons/icon-1.png)' }} />
          <div className="icon-two" style={{ backgroundImage: 'url(/images/icons/icon-2.png)' }} />
          <div className="icon-three" style={{ backgroundImage: 'url(/images/icons/icon-3.png)' }} />
          <div className="sec-title light centered">
            <div className="title">HOW WE WORK</div>
            <h2>
              A Clear Process With
              <br /> Better Digital Results.
            </h2>
          </div>
        </div>
        <div className="inner-container">
          <div className="row clearfix">
            {steps.map((step) => (
              <div className="service-block-two col-lg-2 col-md-2 col-sm-6 col-6" key={step.number}>
                <div className="inner-box">
                  <div className="shape-one" />
                  <div className="shape-two" />
                  <div className="icon-box">
                    <span className="icon">{step.number}</span>
                  </div>
                  <h5>{step.title}</h5>
                  <div className="text">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
