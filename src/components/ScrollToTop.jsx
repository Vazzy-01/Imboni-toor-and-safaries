import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop(){
  const {pathname, search, hash}=useLocation();
  useEffect(()=>{
    if(hash){ requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView({behavior:"smooth",block:"start"})); }
    else window.scrollTo({top:0,left:0,behavior:"instant"});
  },[pathname,search,hash]);
  return null;

}
