import { Routes, Route, Link } from "react-router-dom";
import List from './components/List';
import Home from './components/Home';


//This file contains all the routes of the web app.

export default ()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List/>} />
        </Routes> 
    )
}