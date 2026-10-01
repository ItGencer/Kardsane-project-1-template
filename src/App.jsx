import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Section/Hero/Hero";
import About from "./components/Section/About/About";
import Service from "./components/Section/Service/Service";
import Gallery from "./components/Section/Gallery/Gallery";
import Team from "./components/Section/Team/Team";
import Testimonials from "./components/Section/Testimonials/Testimonials";
import SignUp from "./components/Section/Sign-up/Sign-up";

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
        <Testimonials/>
        <SignUp/>
      </main>
      <Footer />
    </>
  );
}

export default App;
