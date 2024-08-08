import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import PremiumplanPage from "./pages/PremiumplanPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/pricing" element={<PremiumplanPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
