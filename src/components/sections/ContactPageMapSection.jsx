import React from "react";

export default function ContactPageMapSection() {
  return (
    <section className="contact-map-section">
      <div className="auto-container">
        {/* Map Boxed */}
        <div className="map-boxed">
          {/* Map Outer */}
          <div className="map-outer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
              allowFullScreen=""
              title="Melbourne Location"
              style={{ border: 0, width: "100%", height: "450px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}