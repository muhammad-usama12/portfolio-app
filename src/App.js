import "./App.scss";
// import Background from "./Background";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <div className="bg"></div> */}
      <div className="app">
        <Header />
        <Container />
      </div>
    </>
  );
}

export default App;
