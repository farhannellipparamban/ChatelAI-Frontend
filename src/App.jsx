import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import PremiumplanPage from "./pages/PremiumplanPage";
import BlogsPage from "./pages/BlogsPage";
import BlogOverViewPage from "./pages/BlogOverViewPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/pricing" element={<PremiumplanPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/overview" element={<BlogOverViewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
