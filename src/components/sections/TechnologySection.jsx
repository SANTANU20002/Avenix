const technologies = [
  'angular.png',
  'html.png',
  'react.png',
  'node-js.png',
  'nextjs.png',
  'ExpressJS.png',
  'js.png',
  'wordpress.png',
  'Shopify.png',
  'PHP.png',
  'MySQL.png',
  'Vue.js.png',
]

export default function TechnologySection() {
  return (
    <section className="technology-section" style={{ backgroundImage: 'url(/images/background/1.jpg)' }}>
      <div className="pattern-layer-one" style={{ backgroundImage: 'url(/images/background/pattern-5.png)' }} />
      <div className="pattern-layer-two" style={{ backgroundImage: 'url(/images/background/pattern-6.png)' }} />
      <div className="auto-container">
        <div className="row clearfix">
          <div className="title-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title light">
                <div className="title">TECHNOLOGIES WE USE</div>
                <h2>Powering Digital Solutions with Modern Technology.</h2>
              </div>
            </div>
          </div>
          <div className="blocks-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="row clearfix">
                {technologies.map((icon) => (
                  <div className="technology-block col-lg-2 col-md-2 col-sm-2 col-3" key={icon}>
                    <div className="inner-box">
                      <a href="services" className="overlay-link" />
                      <div className="icon-box">
                        <img
                          src={`/images/icons/${icon}`}
                          alt=""
                          style={icon === 'nextjs.png' ? { height: 30 } : undefined}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
