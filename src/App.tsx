import { RoutesMain } from "./routes";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
