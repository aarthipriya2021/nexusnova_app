import 'bootstrap/dist/css/bootstrap.min.css';
import Menu  from './components/Menu/Menu.jsx';
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import CTA from "./components/CTA/CTA.jsx";
import CaseStudies from "./components/CaseStudies/CaseStudies.jsx";
import Process from "./components/Process/Process.jsx";
import Team from './components/Team/Team.jsx';
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer /> 
  </div>
);

export default App;
