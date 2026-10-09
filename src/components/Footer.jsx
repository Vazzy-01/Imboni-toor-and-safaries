import { Link } from "react-router-dom";
import reactLogo from "../assets/logo.png";
export default function Footer(){
  return <footer className="footer">
    <div className="container footer-main">
      <div>
        <Link className="brand footer-brand" to="/"><span>IMBONI</span><b>safaris</b><small>&TOUR</small></Link>
        <p className="footer-tag">Travel deeper. Feel more.</p>
        <Link className="brand" to="/"><img src={reactLogo} alt="logo" className="logo"/></Link>
      </div>
      <div><h4>Explore</h4><Link to="/tours">Journeys</Link><Link to="/destinations">Destinations</Link><Link to="/about">Our story</Link><Link to="/journal">Journal</Link></div>
      <div><h4>Connect</h4><Link to="/contact">Plan a trip</Link><a href="mailto:musengimanaemile032@gmail.com">imboni@rwandarootstour.com</a><span>Kigali, Rwanda</span></div>
      <div><h4>Follow the journey</h4>
        <div className="socials">
          <a href="https://www.instagram.com/keys.kd?stkn=NnFnNXg3ZW9mcGJy" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"/></a>
          <a href="https://www.fb.com/l/6lp1kJRRR" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"/></a>
          <a href="https://wa.me/250791738615?text=Hi%20I%20want%20to%20chat" aria-label="WhatsApp" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"/></a>
          <a href="https://www.tiktok.com/@kd.keys?_r=1&_t=ZS-9A1GOnXNUAO" aria-label="TikTok" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"/></a>
          <a href="https://www.linkedin.com/in/musengimana-emile-248a573aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"/></a>
        </div>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Rwanda Roots Tour</span><span>Made with intention in Rwanda.</span></div>
  </footer>
}
