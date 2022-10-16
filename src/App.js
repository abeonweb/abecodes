import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import About from "./pages/About";
// import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<MyWork />} />
        {/* <Route path="blog" element={<Blog />} /> */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
