import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Copyright from "./components/footer/Copyright";
import Transport from "./components/transport/Transport";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Transport />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
