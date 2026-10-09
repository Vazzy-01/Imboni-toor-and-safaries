import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { destinations, tours } from "../data";
export default function DestinationDetail(){
 const {id}=useParams(); const d=destinations.find(x=>x.id===id);
 if(!d) return <PageShell darkHeader><main><section className="section empty-state"><h1 className="heading">Destination not found.</h1><Link className="button button-green" to="/destinations">Back to destinations</Link></section></main></PageShell>;
 const related=tours.filter(t=>d.tours.includes(t.id));
 return <PageShell darkHeader><main>
  <section className="detail-hero"><img src={d.image} alt={d.title}/><div className="hero-shade"/><div className="container detail-hero-content"><p className="eyebrow light">{d.region}</p><h1 className="display light">{d.title}</h1><p className="detail-sub">{d.description}</p></div></section>
  <section className="section"><div className="container detail-layout"><div><p className="eyebrow">THE PLACE</p><h2 className="heading">A different<br/><em>way in.</em></h2><p className="detail-lead">{d.detail}</p><Link className="arrow-link" to="/contact">Ask us to build a route <span>↗</span></Link></div><div className="destination-facts"><div><span>01</span><strong>Local pacing</strong><p>We shape time around the place, not just the checklist.</p></div><div><span>02</span><strong>Flexible routes</strong><p>Combine this destination with another region when your dates allow.</p></div><div><span>03</span><strong>Personal planning</strong><p>Tell us what interests you and we will suggest a practical route.</p></div></div></div></section>
  {related.length>0&&<section className="dark-section section"><div className="container"><div className="section-top"><div><p className="eyebrow gold">RELATED JOURNEY</p><h2 className="heading light">Start here.</h2></div></div><div className="related-grid">{related.map(t=><Link className="related-card" to={`/tours/${t.slug}`} key={t.id}><img src={t.image} alt={t.alt}/><div><span>{t.duration}</span><h3>{t.title}</h3><p>{t.description}</p><b>Explore journey ↗</b></div></Link>)}</div></div></section>}
  <section className="section"><div className="container centered-copy"><p className="eyebrow">NOT SURE HOW TO COMBINE IT?</p><h2 className="heading">We'll map the<br/><em>whole story.</em></h2><p>Share your dates, interests and travel style. We will help you turn separate places into one coherent journey.</p><Link className="button button-green" to="/contact">Design my route <span>↗</span></Link></div></section>
 </main></PageShell>
}
