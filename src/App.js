import { Route, Routes } from "react-router-dom";
import "./App.css";
import SEO from "./components/SEO";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./config/redux";

function App() {
  return (
    <div className="App">
      <SEO />

      {/* store adlh props wajib dari components Provider */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
