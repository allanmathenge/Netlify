import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Cover from "./components/cover/Cover";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Cover />
      <Footer />
    </div>
  );
}

export default App;
