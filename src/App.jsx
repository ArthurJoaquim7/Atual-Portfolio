import { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Lenis from "@studio-freight/lenis";
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
