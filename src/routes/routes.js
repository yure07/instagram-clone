import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Profile from "../pages/Profile"
import Explore from "../pages/Explore";

const RoutesApp = () => {
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/profile/:name" element={<Profile/>}/>
    </Routes>
    )
}
export default RoutesApp