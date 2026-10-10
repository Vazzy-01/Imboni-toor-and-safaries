import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { tours } from "../data";

const currencies = ["USD", "RWF", "EUR", "GBP", "KES", "UGX", "TZS", "ZAR"];

// Approximate manual display rates. Update these values when exchange rates change.
const exchangeRates = {
  USD: 1,
  RWF: 1400,
  EUR: 0.92,
  GBP: 0.79,
  KES: 129,
  UGX: 3700,
  TZS: 2700,
  ZAR: 18.2
};
const currencySymbols = {
  USD: "$", RWF: "RWF ", EUR: "€", GBP: "£",
  KES: "KSh ", UGX: "USh ", TZS: "TSh ", ZAR: "R "
};
const categoryLabels={all:"All",wildlife:"Wildlife",nature:"Nature",culture:"Culture"};

export default function Tours(){
 const [params,setParams]=useSearchParams();
 const [filter,setFilter]=useState(params.get("category")||"all");
 const [currency,setCurrency]=useState("USD");
 const [rate,setRate]=useState(null); const [rateError,setRateError]=useState("");
 useEffect(()=>setParams(p=>{if(filter==="all")p.delete("category");else p.set("category",filter);return p},{replace:true}),[filter]);
 const visible=useMemo(()=>tours.filter(t=>filter==="all"||t.category===filter),[filter]);
 const price=t=>currency==="USD"?`$${t.usd.toLocaleString()}`:rate?`${Math.round(t.usd*rate).toLocaleString()} ${currency}`:"Loading…";
 return <PageShell darkHeader><main>
  <section className="page-hero page-hero-tours"><div className="hero-shade"/><div className="container page-hero-content"><p className="eyebrow light">CURATED EXPERIENCES</p><h1 className="display light">Journeys with<br/><em>room to breathe.</em></h1><p className="hero-copy light">Choose a direction, then let us shape the details around your dates, pace and interests.</p></div></section>
  <section className="section"><div className="container">
   <div className="filter-bar"><div><p className="eyebrow">OUR JOURNEYS</p><p className="filter-help">Indicative prices are shown for orientation. Your final itinerary is quoted after we confirm the details.</p></div><div className="filters"><label className="currency-picker">Currency<select value={currency} onChange={e=>setCurrency(e.target.value)}>{currencies.map(c=><option key={c}>{c}</option>)}</select></label>{Object.entries(categoryLabels).map(([key,label])=><button key={key} className={`filter ${filter===key?"active":""}`} onClick={()=>setFilter(key)}>{label}</button>)}</div></div>
   <div className="tour-list">{visible.map((t,i)=><article className={`tour-row ${i%2?"reverse":""}`} key={t.id}>
    <div className="tour-row-image"><img src={t.image} alt={t.alt}/></div><div className="tour-row-copy"><span className="tour-index">{t.index}</span><h2>{t.title}</h2><p className="lead">{t.location} · {t.duration}</p><p>{t.description}</p><div className="tour-meta"><span>From <b className="price">{price(t)}</b> pp</span><span>{t.bestFor}</span></div><Link className="arrow-link" to={`/tours/${t.slug}`}>Explore journey <span>↗</span></Link></div>
   </article>)}</div>
   {visible.length===0&&<div className="empty-state small"><h3>No journeys in this filter yet.</h3><button className="button button-secondary" onClick={()=>setFilter("all")}>Show all journeys</button></div>}
  </div></section>
  <section className="quote-section compact"><div className="container quote-inner"><p className="eyebrow gold">NOT SURE WHERE TO START?</p><blockquote>Tell us what makes you curious.<br/><em>We'll take it from there.</em></blockquote><Link className="button button-gold" to="/contact">Talk to a trip designer <span>↗</span></Link></div></section>
 </main></PageShell>
}
