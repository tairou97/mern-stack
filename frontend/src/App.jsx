import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
