import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import {Home} from './components/Home'
import ProductList from "./components/ProductList";
import AddData from "./components/AddData";


function App() {
  return (
    <>
     <Router>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductList/>} />
        <Route path="/adddata" element={<AddData/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
