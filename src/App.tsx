import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { config } from "./constants/config";
import {
  Hero,
  Navbar,
  Footer,
  About,
  Tech,
  Experience,
  Works,
  Certifications,
  Contact,
  StarsCanvas
} from "./components";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-0 min-h-screen bg-primary" role="main">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Certifications />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1d1836",
            color: "#fff",
            border: "1px solid #915EFF",
          },
          success: {
            iconTheme: {
              primary: "#915EFF",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
};

export default App;
