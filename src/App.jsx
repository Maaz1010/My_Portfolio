import Education from "./Components/Education/Education";
import Tools from "./Components/Tools/Tools";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <Education />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
