import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Gallery from "./components/gallery/Gallery";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Service/>
        <Gallery/>
        <Team/>
      </main>
      <Footer />
    </>
  );
}

export default App;
