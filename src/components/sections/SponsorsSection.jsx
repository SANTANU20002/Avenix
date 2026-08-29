const clients = ['1.png', '2.png', '3.png', '4.png', '1.png', '2.png', '3.png', '4.png']

export default function SponsorsSection() {
  return (
    <section className="sponsors-section">
      <div className="auto-container">
        <div className="carousel-outer">
          <ul className="sponsors-carousel owl-carousel owl-theme">
            {clients.map((logo, i) => (
              <li key={i}>
                <div className="image-box">
                  <a href="#">
                    <img src={`/images/clients/${logo}`} alt="" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
