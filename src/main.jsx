import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App(){return <>
 <ScrollToTop/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/tours" element={<Tours/>}/>
  <Route path="/tours/:slug" element={<TourDetail/>}/>
  <Route path="/destinations" element={<Destinations/>}/>
  <Route path="/destinations/:id" element={<DestinationDetail/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/journal" element={<Journal/>}/>
  <Route path="/journal/:slug" element={<JournalPost/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/404" element={<NotFound/>}/>
  <Route path="*" element={<Navigate to="/404" replace/>}/>
 </Routes>
</>}

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
