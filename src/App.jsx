import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signin";
import "tailwindcss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<h1>Welcome to Dashboard</h1>} />
    </Routes>
  );
}

export default App;

