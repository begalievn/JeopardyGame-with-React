import "./App.css";
import { Outlet } from "react-router-dom";
import "antd/dist/antd.css";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
