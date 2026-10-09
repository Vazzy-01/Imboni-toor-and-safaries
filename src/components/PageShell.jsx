import Header from "./Header";
import Footer from "./Footer";
export default function PageShell({children, darkHeader=false}) {
  return <><Header dark={darkHeader}/>{children}<Footer/></>
}
