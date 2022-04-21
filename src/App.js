import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Gallery from "./pages/Gallery/Gallery";
import Apply from "./pages/Home/Apply/Apply";
import Home from './pages/Home/Home/Home'
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="apply" element={<Apply />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="dashboard/*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
