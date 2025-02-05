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
            <Route path="/Postres" element={<Dessert />} />
            <Route path="/Pescados" element={<Fish />} />
            <Route path="/Carnes" element={<Meat />} />
            <Route path="/Ensaladas-y-Verduras" element={<Salad />} />
            <Route path="/Sopas-y-Entradas" element={<Soup />} />
        </Routes>
        
    );
}

export default Rrouter;