import vantaHalo from 'vanta/src/vanta.halo';
import './App.scss';
import Hero from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
function App() {
  vantaHalo({
    el: '#Homepage', // change the element here.
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
  return (
    <div className="App">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Skills">Skills</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
