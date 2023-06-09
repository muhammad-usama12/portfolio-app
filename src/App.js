import './App.scss';
import AppRoutes from './Components/router';
import Header from './Components/Header/index';
import { useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      {isHome ? (
        <>
          <Header />
          <div className="page">
            <AppRoutes />
          </div>
        </>
      ) : (
        <>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Header />
          <div className="page">
            <AppRoutes />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
