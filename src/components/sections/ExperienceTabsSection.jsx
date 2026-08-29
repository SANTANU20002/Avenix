const tabs = [
  { id: 'prod-html', icon: 'flaticon-html', label: 'HTML', title: 'HTML Website Development Services' },
  { id: 'prod-bootstrap', icon: 'flaticon-bootstrap', label: 'Bootstrap', title: 'Bootstrap Website Development Services' },
  { id: 'prod-css', icon: 'flaticon-css', label: 'CSS', title: 'CSS Website Development Services', active: true },
  { id: 'prod-php', icon: 'flaticon-php', label: 'Php', title: 'Php Website Development Services' },
  { id: 'prod-java', icon: 'flaticon-java', label: 'JavaScript', title: 'JavaScript Website Development Services' },
]

const description = (
  <>
    Engitech is the partner of choice for many of the world&rsquo;s leading enterprises, SMEs and technology challengers. We help businesses <br /> elevate their value through custom software development, product design, QA and
    consultancy services.
  </>
)

export default function ExperienceTabsSection() {
  return (
    <section className="experiance-section" style={{ backgroundImage: 'url(/images/background/pattern-9.png)' }}>
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="title">EXPERIENCE. EXECUTION. EXCELLENCE.</div>
          <h2>What We Actually Do</h2>
        </div>

        <div className="experiance-info-tabs">
          <div className="experiance-tabs tabs-box">
            <ul className="tab-btns tab-buttons clearfix">
              {tabs.map((tab) => (
                <li key={tab.id} data-tab={`#${tab.id}`} className={`tab-btn${tab.active ? ' active-btn' : ''}`}>
                  <span className={`icon ${tab.icon}`} />
                  {tab.label}
                </li>
              ))}
            </ul>

            <div className="tabs-content">
              {tabs.map((tab) => (
                <div className={`tab${tab.active ? ' active-tab' : ''}`} id={tab.id} key={tab.id}>
                  <div className="content">
                    <h4>{tab.title}</h4>
                    <div className="text">{description}</div>
                    <div className="btn-box text-center">
                      <a href="services-detail.html" className="theme-btn btn-style-three">
                        <span className="txt">Learn More</span>
                      </a>
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
