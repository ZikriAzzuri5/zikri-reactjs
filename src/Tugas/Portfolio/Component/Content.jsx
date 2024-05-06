import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Reviews from "./Reviews";
import Services from "./Services";
import Works from "./Works";

export default function Content() {
  return(
    <div id="content-wrapper">
      <Home />
      <Services />
      <Works />
      <About />
      <Reviews />
      <Contact />
    </div>
  )
}