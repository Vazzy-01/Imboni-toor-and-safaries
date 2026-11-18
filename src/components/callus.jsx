import {Link} from "react-router-dom";
import { useState } from "react";
export default function CallUs(){
    const [show,setShow]=useState(false);
  return <div>
    <div className="callus" style={{backgroundcolor: "red",height:"30px",width:"100%"}}><button className="callus-button" onClick={()=>setShow(true)}>Call us</button></div>
    {show&&<main>
      <section className="section empty-state">
      <h1 className="heading">Call us</h1>
      <p>We are happy to answer your questions and help you plan your journey.</p>
      <p>+250 788 123 456</p>
      <Link className="button button-green" to="/" onClick={()=>setShow(false)}>Back home <span>↗</span></Link>
      </section>
      </main>
      }
  </div>
}