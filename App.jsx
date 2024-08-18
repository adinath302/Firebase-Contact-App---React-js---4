import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";


function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex">
        <CiSearch />

        <input
          type="text"
          className="flex-grow h-10 bg-transparent border border-white rounded-md"
        />

      </div>
    </div>
  );
}

export default App;
