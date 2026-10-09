import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { tours } from "../data";
import "./TourDetail.css";

export default function TourDetail() {
  const { slug } = useParams();
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return (
      <PageShell darkHeader>
        <main>
          <section className="section empty-state">
            <p className="eyebrow">JOURNEY NOT FOUND</p>
            <h1 className="heading">Let's find another<br /><em>way in.</em></h1>
            <Link className="button button-green" to="/tours">
              View journeys <span>↗</span>
            </Link>
          </section>
        </main>
      </PageShell>
    );
  }

  const enquiryUrl = `/contact?interest=${encodeURIComponent(tour.interest)}&journey=${encodeURIComponent(tour.title)}`;

  return (
    <PageShell darkHeader>
      <main className="tour-detail-page">
        <section className="detail-hero detail-hero--gallery">
          <img src={tour.image} alt={tour.alt} />
          <div className="hero-shade" />
          <div className="container detail-hero-content">
            <p className="eyebrow light">{tour.index}</p>
            <h1 className="display light">{tour.title}</h1>
            <p className="detail-sub">{tour.location} <span aria-hidden="true">·</span> {tour.duration}</p>
          </div>
          <a className="detail-hero-caption" href="#place-gallery">Explore the place <span>↓</span></a>
        </section>

               {tour.gallery?.length > 0 && (
          <section className="section detail-gallery-section" id="place-gallery">
            <div className="container">
              <div className="detail-section-heading">
                <div>
                  <p className="eyebrow">A FEEL FOR THE PLACE</p>
                  <h2 className="heading">See it before<br /><em>you arrive.</em></h2>
                </div>
                <p className="detail-section-note">A small visual introduction to the landscapes and experiences around {tour.location}. Select an image to view it larger.</p>
              </div>
              <div className="detail-gallery-grid">
                {tour.gallery.map((photo, index) => (
                  <a
                    className={`detail-gallery-item detail-gallery-item--${index + 1}`}
                    href={photo.image}
                    target="_blank"
                    rel="noreferrer"
                    key={`${photo.image}-${index}`}
                    aria-label={`Open larger image: ${photo.caption}`}
                  >
                    <img src={photo.image} alt={photo.alt} loading="lazy" />
                    <span className="detail-gallery-caption">{photo.caption}</span>
                    <span className="detail-gallery-expand" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
              <p className="detail-image-note">Photo gallery images are illustrative. Exact wildlife sightings, weather and views vary by season and conditions.</p>
            </div>
          </section>
        )}

        <section className="section detail-intro-section">
          <div className="container detail-layout">
            <div className="detail-intro-copy">
              <p className="eyebrow">THE EXPERIENCE</p>
              <h2 className="heading">A closer look at<br /><em>{tour.placeName || tour.location}.</em></h2>
              <p className="detail-lead">{tour.description}</p>
              {tour.placeOverview && <p className="detail-place-overview">{tour.placeOverview}</p>}
              <p className="detail-muted"><strong>Best for:</strong> {tour.bestFor}.</p>
              <Link className="button button-green" to={enquiryUrl}>
                Plan this journey <span>↗</span>
              </Link>
            </div>

            <aside className="detail-card">
              <span className="receipt-label">YOUR JOURNEY AT A GLANCE</span>
              <strong>{tour.location}</strong>
              <span>{tour.duration}</span>
              <div className="detail-card-divider" />
              <div className="detail-price">From <b>${tour.usd.toLocaleString()}</b> pp</div>
              <small>Indicative planning price. Your final quote depends on dates, availability, accommodation and selected activities.</small>
              <Link className="detail-card-link" to={enquiryUrl}>Ask about this journey ↗</Link>
            </aside>
          </div>
        </section>

        {tour.highlights?.length > 0 && (
          <section className="detail-highlights-section">
            <div className="container">
              <div className="detail-section-heading">
                <div>
                  <p className="eyebrow">WHY GO</p>
                  <h2 className="heading">The moments<br /><em>to look forward to.</em></h2>
                </div>
                <p className="detail-section-note">Every trip is shaped around your dates, interests and pace. These are some of the experiences this place is known for.</p>
              </div>
              <div className="detail-highlights-grid">
                {tour.highlights.map((item, index) => (
                  <article className="detail-highlight" key={item.title}>
                    <span className="detail-highlight-number">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}


        <section className="dark-section section detail-itinerary-section">
          <div className="container detail-columns">
            <div>
              <p className="eyebrow gold">A POSSIBLE RHYTHM</p>
              <h2 className="heading light">Leave room for<br /><em>the unexpected.</em></h2>
              <p className="detail-dark-note">This is a sample outline, not a fixed schedule. We can adjust the pace and activities after discussing your plans.</p>
            </div>
            <div className="timeline">
              {tour.itinerary.map((item, index) => (
                <div className="timeline-item" key={`${item}-${index}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section detail-practical-section">
          <div className="container detail-columns light-detail">
            <div>
              <p className="eyebrow">PLAN WITH CONFIDENCE</p>
              <h2 className="heading">The practical<br /><em>details.</em></h2>
              {tour.bestTime && (
                <div className="detail-practical-fact">
                  <span>WHEN TO GO</span>
                  <p>{tour.bestTime}</p>
                </div>
              )}
              {tour.travelTips?.length > 0 && (
                <div className="detail-practical-fact">
                  <span>HELPFUL TO KNOW</span>
                  <ul>{tour.travelTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
                </div>
              )}
            </div>
            <div>
              <p className="eyebrow">WHAT WE HELP WITH</p>
              <ul className="clean-list">
                {tour.includes.map((item) => (
                  <li key={item}><span>✓</span>{item}</li>
                ))}
              </ul>
              <div className="notice">
                <strong>Good to know</strong>
                <p>{tour.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band detail-cta-band">
          <div className="container">
            <p className="eyebrow gold">READY WHEN YOU ARE</p>
            <h2 className="heading light">Let's make this<br /><em>one yours.</em></h2>
            <p className="detail-cta-copy">Tell us when you hope to travel and what you would love to experience. We will help shape the next steps with you.</p>
            <Link className="button button-gold" to={enquiryUrl}>
              Start your enquiry <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
