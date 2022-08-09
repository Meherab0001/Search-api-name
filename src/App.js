import { Routes,Route} from "react-router-dom";
import Details from "./Components/ApiCard/Details";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div >
      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/details/:url" element={<Details></Details>} />

        </Routes>
    </div>
  );
}

export default App;
