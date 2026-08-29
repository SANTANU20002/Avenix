const items = [
  { icon: 'flaticon-dashboard', label: 'Data Analytics' },
  { icon: 'flaticon-coding-3', label: 'Web Develpment' },
  { icon: 'flaticon-design', label: 'Ul/UX Design' },
  { icon: 'flaticon-web-browser', label: 'QA & Testing' },
  { icon: 'flaticon-network-1', label: 'Dedicated Team' },
]

export default function TechnologyIndexSection() {
  return (
    <section className="technology-section style-two" style={{ backgroundImage: 'url(/images/background/1.jpg)' }}>
      <div className="pattern-layer-one" style={{ backgroundImage: 'url(/images/background/pattern-5.png)' }} />
      <div className="pattern-layer-two" style={{ backgroundImage: 'url(/images/background/pattern-6.png)' }} />
      <div className="auto-container">
        <div className="sec-title light centered">
          <div className="title">TECHNOLOGY INDEX</div>
          <h2>
            Real Time Monitoring Your Infrstracture <br /> Branded Degital Solutions
          </h2>
        </div>
        <div className="row clearfix">
          {items.map((item) => (
            <div className="technology-block" key={item.label}>
              <div className="inner-box">
                <a href="services-detail.html" className="overlay-link" />
                <div className="icon-box">
                  <span className={item.icon} />
                </div>
                <h6>{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
