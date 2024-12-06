import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Copyright from "./components/footer/Copyright";
import Transport from "./components/transport/Transport";
import Services from "./components/services/Services";
import LogisticSolution from "./components/logisticSolutions/LogisticSolution";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Transport />
      <Services />
      <LogisticSolution />
      <Footer />
      <Copyright />
      <Carousel />
    </>
  );
}

export default App;
