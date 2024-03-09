import React from 'react';
import './App.css';
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import Footer from "./components/Footer/Footer";
import {ContainerPosts} from './features/Posts/ContainerPosts';
import {Navigate, Route, Routes} from "react-router-dom";
import RecipeCard from './components/Card/RecipeCard';


function App() {

    return (
        <div className="App">
            <MenuAppBar/>

            <Routes>
                <Route path="/" element={<ContainerPosts/>} />
                <Route path="/home" element={<Navigate to="/"/>} />
                <Route path="/card" element={<RecipeCard/>} />
                <Route path="/404" element={<h1>404 PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to={'/404'} />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
