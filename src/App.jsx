import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Copyright from "./components/footer/Copyright";
import Transport from "./components/transport/Transport";
import Services from "./components/services/Services";
import LogisticSolution from "./components/logisticSolutions/LogisticSolution";
import Carousel from "./components/carousel/Carousel";
import CloserLookSlider from "./components/closerLookSlider/CloserLookSlider";
import QuoteForm from "./components/quoteForm/QuoteForm";
import KeepInTouch from "./components/keepinTouch/KeepInTouch";
import ReadytoSimplify from "./components/readyToSimplify/ReadytoSimplify";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Transport />
      <Services />
      <LogisticSolution />
      <Carousel />
      <ReadytoSimplify />
      <KeepInTouch />
      <QuoteForm />
      <CloserLookSlider />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
