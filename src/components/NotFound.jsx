import { Link } from "react-router-dom";
import PageShell from "./PageShell";
export default function NotFound(){return <PageShell darkHeader><main><section className="section empty-state"><p className="eyebrow">404 • NOT FOUND</p><h1 className="heading">That path doesn't<br/><em>lead anywhere.</em></h1><p>Let's get you back to Rwanda.</p><Link className="button button-green" to="/">Back home <span>↗</span></Link></section></main></PageShell>}
