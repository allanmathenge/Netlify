import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Cover from "./components/cover/Cover";
import Stack from "./components/stack/Stack";
import Testimonial from "./components/testimonial/Testimonial";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Breakout from "./components/breakout/Breakout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Cover />
      <Stack />
      <Testimonial />
      <Home />
      <Footer />
      <Breakout />
    </div>
  );
}

export default App;
