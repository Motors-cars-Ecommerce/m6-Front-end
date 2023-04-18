import "./App.css";
import { RoutesMain } from "./routes";
import HomeCarCard from "./components/HomeCarCard/HomeCarCard";
import Dashboard from "./pages/Dashboard/dashboard";
import ReactModal from "react-modal";

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div className="App">
      <RoutesMain />
    </div>
  );
}

export default App;
