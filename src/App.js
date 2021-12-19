import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Request from "./pages/Request";

function App() {
  const [isToggle, SetIsToggle] = useState(false);

  const toggleHandler = () => {
    SetIsToggle(!isToggle);
  };
  return (
    <div className="App">
      <Sidebar isToggle={isToggle} toggleHandler={toggleHandler} />
      <Navbar toggleHandler={toggleHandler} />
      <Request />
    </div>
  );
}

export default App;
