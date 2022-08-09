import { Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div >
      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
    </div>
  );
}

export default App;
