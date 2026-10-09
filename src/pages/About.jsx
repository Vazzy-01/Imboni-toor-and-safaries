import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { IMG } from "../data";

export default function About(){
 return <PageShell darkHeader><main>
  <section className="page-hero page-hero-about"><div className="hero-shade"></div><div className="container page-hero-content"><p className="eyebrow light">WHO WE ARE</p><h1 className="display light">Rooted here.<br/><em>Curious everywhere.</em></h1></div></section>
  <section className="section"><div className="container split"><div className="section-copy"><p className="eyebrow">OUR STORY</p><h2 className="heading">Tourism should feel<br/><em>human.</em></h2><p>IMBONI Roots Tour began with a simple idea: the best journeys are not the ones where you see the most. They are the ones where you feel the most.</p><p>We are a small, locally minded travel team building thoughtful experiences around Rwanda's landscapes, culture and everyday life.</p><p>We believe visitors deserve more than a schedule — they deserve context, care and enough breathing room to be surprised.</p></div><div className="image-frame portrait"><img src={IMG.hills} alt="Rwanda hills"/></div></div></section>
  <section className="dark-section section values"><div className="container"><div className="section-top"><div><p className="eyebrow gold">WHAT WE BELIEVE</p><h2 className="heading light">Small choices<br/><em>matter.</em></h2></div></div><div className="values-grid">{[["01","Local first","We work with local hosts, guides and makers wherever possible."],["02","Less, better","We favour depth over a packed itinerary and quality over quantity."],["03","Leave room","The most memorable moments often aren't the ones on the itinerary."],["04","Respect the place","Travel should contribute to the people and landscapes that welcome you."]].map(v=><div key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></div>)}</div></div></section>
  <section className="section"><div className="container story-stats"><div><strong>01</strong><span>country we call home</span></div><div><strong>100%</strong><span>journeys built around people</span></div><div><strong>∞</strong><span>ways to experience Rwanda</span></div></div></section>
  <section className="cta-banner"><div className="container cta-inner"><p className="eyebrow light">READY?</p><h2 className="heading light">Bring your curiosity.<br/><em>We'll bring the route.</em></h2><Link className="button button-gold" to="/contact">Start planning <span>↗</span></Link></div></section>
 </main></PageShell>
}
