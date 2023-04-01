import "./App.scss";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div>
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
