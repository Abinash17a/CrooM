import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";
// import './index.css'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;