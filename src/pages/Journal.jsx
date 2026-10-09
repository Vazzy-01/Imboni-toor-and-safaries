import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { journalPosts } from "../data";
export default function Journal(){const [featured,...rest]=journalPosts;return <PageShell darkHeader><main>
 <section className="page-hero page-hero-journal"><div className="hero-shade"/><div className="container page-hero-content"><p className="eyebrow light">FIELD NOTES</p><h1 className="display light">Stories from<br/><em>the road.</em></h1></div></section>
 <section className="section"><div className="container"><Link className="featured-post" to={`/journal/${featured.slug}`}><div className="featured-post-image"><img src={featured.image} alt={featured.title}/></div><div className="featured-post-copy"><span className="eyebrow">{featured.number} • {featured.category}</span><h2 className="heading">{featured.title}</h2><p>{featured.excerpt}</p><span className="arrow-link">Read the story <span>↗</span></span></div></Link>
 <div className="article-grid journal-grid">{rest.map(post=><Link className="article-card" to={`/journal/${post.slug}`} key={post.slug}><div className="article-img"><img src={post.image} alt={post.title}/></div><span>{post.number} • {post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b className="card-read">Read story ↗</b></Link>)}</div></div></section>
 </main></PageShell>}
