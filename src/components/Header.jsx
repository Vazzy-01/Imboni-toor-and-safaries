import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import reactLogo from "../assets/logo.png";

const links = [
  ["/", "Home"],
  ["/tours", "Journeys"],
  ["/destinations", "Destinations"],
  ["/about", "Our Story"],
  ["/journal", "Journal"]
];

export default function Header({ dark=false }) {
  const [open,setOpen] = useState(false);
  const location = useLocation();

  useEffect(()=>setOpen(false),[location.pathname, location.hash]);

  useEffect(()=>{
    const onScroll=()=>document.getElementById("siteHeader")?.classList.toggle("scrolled",window.scrollY>20);
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  return <>
    <div className="announcement">Private journeys • Local guides • Thoughtful travel across Rwanda</div>
    <header className={`site-header ${dark ? "dark-header":""}`} id="siteHeader">
      
      <Link className="brand" to="/"><img src={reactLogo} alt="logo" className="logo"/></Link>
      <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
        <span></span><span></span>
      </button>
      <nav className={`main-nav ${open ? "open":""}`}>
        {links.map(([to,label])=>
          <NavLink key={to} to={to} className={({isActive})=>isActive ? "active":""}>{label}</NavLink>
        )}
        <NavLink className={({isActive})=>`nav-cta ${isActive ? "active":""}`} to="/contact">Plan a trip <span>↗</span></NavLink>
      </nav>
    </header>
  </>;
}
