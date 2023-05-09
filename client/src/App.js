import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./Dashboard/Dashboard";
import MyForm from "./Dashboard/MyForm";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/add-event" element={<MyForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/MyForm"
          element={
            <ProtectedRoute>
              <MyForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
