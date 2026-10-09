import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { IMG } from "../data";

export default function Home(){
 return <PageShell>
  <main>
   <section className="hero home-hero">
    <div className="hero-media"></div><div className="hero-shade"></div>
    <div className="hero-inner container">
      <Reveal><p className="eyebrow light">THE LAND OF A THOUSAND HILLS</p></Reveal>
      <Reveal className="delay-1"><h1 className="display light">Explore your<br/><em>Rwanda.</em></h1></Reveal>
      <Reveal className="delay-2"><p className="hero-copy light">Slow down. Look closer. Travel beyond the checklist and discover a Rwanda that stays with you.</p></Reveal>
      <Reveal className="delay-3"><div className="hero-actions"><Link className="button button-gold" to="/tours">Explore journeys <span>→</span></Link><a className="text-button light" href="#story">Why IMBONI roots <span>↓</span></a></div></Reveal>
    </div>
    <div className="hero-note"><span>01</span><i></i><span>04</span></div>
    
   </section>

   <section className="section intro-section" id="story">
    <div className="container split split-intro">
      <Reveal className="image-frame tall">
        <img src={IMG.greenHills} alt="Green hills in Rwanda"/>
      <img src={IMG.kivu} alt="Green hills in Rwanda"/>
      <img src={IMG.kigali} alt="Green hills in Rwanda"/>
      <img src={IMG.gorilla} alt="Green hills in Rwanda"/>
      <img src={IMG.nyungwe} alt="Green hills in Rwanda"/>
      <img src={IMG.hills} alt="Green hills in Rwanda"/> 
      <img src={IMG.safari} alt="Green hills in Rwanda"/></Reveal>
      <Reveal className="section-copy delay-1"><p className="eyebrow">A DIFFERENT KIND OF TRAVEL</p><h2 className="heading">More than a destination.<br/><em>A feeling.</em></h2><p>Rwanda is not simply somewhere you visit. It is a place you experience slowly — through a shared meal, a mountain trail, a conversation, a quiet lake and the rhythm of everyday life.</p><p>We create intimate journeys that connect you with the landscapes and people that make Rwanda extraordinary.</p><Link className="arrow-link" to="/about">Discover our story <span>↗</span></Link></Reveal>
    </div>
   </section>

   <section className="section dark-section featured"><div className="container">
    <div className="section-top"><div><p className="eyebrow gold">CURATED JOURNEYS</p><h2 className="heading light">Go where the<br/><em>story leads.</em></h2></div><Link className="arrow-link light" to="/tours">View all journeys <span>↗</span></Link></div>
    <div className="journey-grid">
      {[
        ["gorilla",IMG.gorilla,"VOLCANOES • 3 DAYS","Into the mist","Gorillas, volcanic peaks & quiet mountain mornings."],
        ["safari",IMG.safari,"AKAGERA • 2 DAYS","Wild at heart","Golden savannahs and a closer look at the wild."],
        ["kivu",IMG.kivu,"LAKE KIVU • 3 DAYS","By the blue","Slow days, warm water and lakeside culture."]
      ].map(([id,img,meta,title,desc],i)=><Link key={id} className={`journey-card ${i===0?"large":""}`} to={`/tours/${id === "gorilla" ? "into-the-mist" : id === "safari" ? "wild-at-heart" : "by-the-blue"}`}><img src={img} alt={title}/><span className="card-number">0{i+1}</span><div className="journey-overlay"></div><div className="journey-info"><span>{meta}</span><h3>{title}</h3><p>{desc}</p></div></Link>)}
    </div>
   </div></section>
{/*}
   <section className="section experience-section"><div className="container experience-grid">
    <Reveal className="section-copy"><p className="eyebrow">WHY TRAVEL WITH US</p><h2 className="heading">Travel with<br/><em>meaning.</em></h2><div className="feature-list">
      <div className="feature"><span>01</span><div><h3>Local by nature</h3><p>Our experiences are shaped with people who know Rwanda personally.</p></div></div>
      <div className="feature"><span>02</span><div><h3>Small, intentional journeys</h3><p>Less rushing. More room for the moments you didn't plan for.</p></div></div>
      <div className="feature"><span>03</span><div><h3>Made around you</h3><p>Your pace, interests and curiosity become part of the itinerary.</p></div></div>
    </div></Reveal>
   </div></section>*/}

   <section className="quote-section"><div className="container quote-inner"><p className="eyebrow gold">THE ROOTS PHILOSOPHY</p><blockquote>“Come curious.<br/><em>Leave connected.</em>”</blockquote><span className="quote-line"></span></div></section>

   <section className="section journal-preview"><div className="container">
    <div className="section-top"><div><p className="eyebrow">FROM THE JOURNAL</p><h2 className="heading">Notes from<br/><em>the road.</em></h2></div><Link className="arrow-link" to="/journal">Read the journal <span>↗</span></Link></div>
    <div className="article-grid">
      <Link className="article-card" to="/journal#kigali"><div className="article-img"><img src={IMG.kigali} alt="Kigali city"/></div><span>01 • KIGALI</span><h3>A slower way to see the city</h3><p>Small streets, good coffee and the stories between the landmarks.</p></Link>
      <Link className="article-card" to="/journal#food"><div className="article-img"><img src={IMG.food} alt="Fresh food"/></div><span>02 • CULTURE</span><h3>Five flavors that feel like home</h3><p>Food is one of the fastest ways into the heart of a place.</p></Link>
      <Link className="article-card" to="/journal#hills"><div className="article-img"><img src={IMG.kivu} alt="Landscape"/></div><span>03 • LANDSCAPE</span><h3>Why the hills change everything</h3><p>How Rwanda's terrain shapes the way people live, move and meet.</p></Link>
    </div>
   </div></section>
   <section className="cta-banner"><div className="container cta-inner"><p className="eyebrow light">YOUR RWANDA STORY STARTS HERE</p><h2 className="heading light">Let's make a journey<br/><em>worth remembering.</em></h2><Link className="button button-gold" to="/contact">Plan your trip <span>↗</span></Link></div></section>
  </main>
 </PageShell>
}
