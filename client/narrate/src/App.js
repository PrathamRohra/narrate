import "./App.css";
import Categories from "./components/categories";
import BlogContent from "./components/blogContent";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="blog/:id" element={ <BlogContent /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
