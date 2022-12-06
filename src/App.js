import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" p-2 sm:p-3 md:p-4 lg:p-5    md:h-screen  flex flex-col justify-between">
      <div className="xl:max-w-[80%] xl:mx-auto">
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
