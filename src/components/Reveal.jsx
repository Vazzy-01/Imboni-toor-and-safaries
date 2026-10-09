import { useEffect, useRef, useState } from "react";

export default function Reveal({children,className=""}){
  const ref=useRef(null); const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const node=ref.current; if(!node) return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){setVisible(true); observer.unobserve(node);}
    },{threshold:.12});
    observer.observe(node); return ()=>observer.disconnect();
  },[]);
  return <div ref={ref} className={`reveal ${visible?"visible":""} ${className}`}>{children}</div>
}
