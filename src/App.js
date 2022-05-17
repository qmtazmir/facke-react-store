import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Components/Menuebar/Menubar";
import AllProducts from "./Components/AllProducts/AllProducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  };
  const cutCartCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <h1 className="text-danger">বিসমিল্লাহির রহমানির রহীম</h1>
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount} cutCartCount={cutCartCount}></AllProducts>
    </div>
  );
}

export default App;
