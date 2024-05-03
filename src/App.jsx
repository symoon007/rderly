import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pricing from "./components/Pricing/Pricing";
import Faq from "./components/faq/Faq";
import OrderManage from "./components/order-management/OrderManage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OrderManage/>
      <Pricing />
      <Faq />
    </>
  );
}

export default App;
