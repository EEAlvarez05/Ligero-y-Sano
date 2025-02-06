import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Dessert from "../Pages/Dessert";
import Fish from "../Pages/Fish";
import Meat from "../Pages/Meat";
import Salad from "../Pages/Salad";
import Soup from "../Pages/Soup";

function Rrouter() {
    return (  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/postres" element={<Dessert />} />
            <Route path="/pescados" element={<Fish />} />
            <Route path="/carnes" element={<Meat />} />
            <Route path="/ensaladas-y-verduras" element={<Salad />} />
            <Route path="/sopas-y-entradas" element={<Soup />} />
        </Routes>
        
    );
}

export default Rrouter;