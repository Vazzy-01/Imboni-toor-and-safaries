import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { journalPosts } from "../data";
import ImagePreview from "./ImagePreview";
export default function JournalPost(){
 const {slug}=useParams(); const post=journalPosts.find(p=>p.slug===slug);
 if(!post) return <PageShell darkHeader><main><section className="section empty-state"><h1 className="heading">Story not found.</h1><Link className="button button-green" to="/journal">Back to journal</Link></section></main></PageShell>;
 return <PageShell darkHeader><main>
  <section className="article-hero">
    <video 
    src={post.video} 
    className="tour-video"
     autoPlay
      muted
      loop
      playsInline
       alt={post.title}/><div className="hero-shade"/><div className="container detail-hero-content"><p className="eyebrow light">{post.number} • {post.category}</p><h1 className="display light">{post.title}</h1></div></section>
<article className="section article-body"><div ><div className="article-reading"><p className="eyebrow">FIELD NOTES</p>{post.body.map(p=><p key={p}>{p}</p>)}</div><div className="posts gallery-container">{ post.images.map((image) => (
    <ImagePreview
          key={image.name}
          image={image}
        />
))}</div><div className="article-reading"><div className="article-end"><Link className="arrow-link" to="/journal">Back to all stories <span>↗</span></Link><Link className="button button-green" to="/contact">Plan a trip <span>↗</span></Link></div></div></div></article>
 </main></PageShell>
}
