import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import "./App.css";
import {Context} from "./context";
import {observer} from "mobx-react-lite";
import ArticleStore from "./store/ArticleStore";
import Admin from './pages/Admin';
import AdminPanel from './components/AdminPanel/AdminPanel';

const App = observer(() => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);


    return (
        <Context.Provider value={{
            article: new ArticleStore()
        }}>
            <BrowserRouter>
                <NavBar />
                <div className="pages">
                    <Routes>
                        <Route exact path="/" element={<News/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/auth" element={<Auth/>} />
                        <Route path="/admin" element={<AdminPanel/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Context.Provider>

    );
});

export default App;