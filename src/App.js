import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import News from "./pages/News";
import ContactForm from "./pages/ContactForm";
import Auth from "./pages/Auth";
import "./App.css";

function App () {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="pages">
                <Routes>
                    <Route exact path="/" element={<News/>} />
                    <Route path="/contact" element={<ContactForm/>} />
                    <Route path="/auth" element={<Auth/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;