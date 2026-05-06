import { Routes, Route, Link , useLocation} from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/Home';
import Blog from './pages/Blog';
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <nav className="navbar">
        <Link to="/" className="nav-logo">MyPortfolio</Link>
        <div className="nav-links">
          <a href="/my-portfolio/#about">About</a>
          <a href="/my-portfolio/#projects">Projects</a>
          <a href="/my-portfolio/#contact">Contact</a>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;