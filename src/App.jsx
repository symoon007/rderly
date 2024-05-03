import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Pricing from "./components/Pricing/Pricing";
import Faq from "./components/faq/Faq";
import OrderManage from "./components/order-management/OrderManage";
import Demo from "./components/get-demo/Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OrderManage />
      <Pricing />
      <Faq />
      <Demo />
    </>
  );
}

export default App;
