import HeroSection from "./pages/HeroSection"
import ShowcaseSection from "./pages/ShowcaseSection"
import AboutSection from "./pages/AboutSection"
import Footer from "./pages/FooterSection"
import './index.css'
function App() {
  
  const cursor = document.querySelector(".__cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <Footer />
      <div className="__cursor "></div>
    </>
  )
}

export default App
