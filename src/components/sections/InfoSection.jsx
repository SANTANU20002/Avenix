const infoBlocks = [
  { icon: 'flaticon-pin', label: 'Address', value: '125, Suitland Street, USA' },
  { icon: 'flaticon-phone-call', label: 'Phone', value: '+ 786 875 864 75' },
  { icon: 'flaticon-email-1', label: 'E-Mail', value: 'support@avenex.com' },
]

export default function InfoSection() {
  return (
    <section className="info-section" style={{ backgroundImage: 'url(/images/background/6.jpg)' }}>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="logo-column col-lg-3 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo-2.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {infoBlocks.map((block) => (
            <div className="info-column col-lg-3 col-md-6 col-sm-12" key={block.label}>
              <div className="inner-column">
                <div className="icon-box">
                  <span className={block.icon} />
                </div>
                <ul>
                  <li>
                    <strong>{block.label}</strong>
                  </li>
                  <li>{block.value}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
