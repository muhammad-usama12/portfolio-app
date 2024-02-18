import './navbar.scss';
import { motion } from 'framer-motion';
import { Sidebar } from '../sidebar/Sidebar';
export function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Usama Muhammad (LOGO)
        </motion.span>
      </div>
    </div>
  );
}
