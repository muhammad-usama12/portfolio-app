import "./App.scss";
// import Background from "./Background";
import Container from "./components/Container";
import Header from "./components/Header";
import Svg from "./components/Svg";

function App() {
  return (
    <>
      {/* <div className="bg"></div> */}
      <div className="app">
        <Header />
        <Container />
        <Svg />
      </div>
    </>
  );
}

export default App;
