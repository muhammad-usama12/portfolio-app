import './App.scss';
import AppRoutes from './components/Routes/index';
import Header from './components/Header';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <div className="page">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
