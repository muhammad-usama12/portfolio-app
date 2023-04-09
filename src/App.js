import './App.scss';
import AppRoutes from './components/Routes/index';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
