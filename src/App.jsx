// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

function App() {
    const [quantities, setQuantities] = useState({
        "Латте1": 0,
        "Латте2": 0,
        "Латте3": 0,
        "Латте4": 0,
        "Латте5": 0,
        "Латте6": 0,
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleAdd = (name) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [name]: prevQuantities[name] + 1,
        }));
    };

    const handleRemove = (name) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [name]: Math.max(0, prevQuantities[name] - 1),
        }));
    };

    const handleOrderClick = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const cartItems = Object.keys(quantities)
        .filter((key) => quantities[key] > 0)
        .map((key) => ({ name: key.replace(/[0-9]/, ''), quantity: quantities[key] }));

    return (
        <Router>
            <div className={`app-container ${showConfirmation ? 'blurred' : ''}`}>
                <Routes>
                    <Route path="/" element={<Menu
                        quantities={quantities}
                        onAdd={handleAdd}
                        onRemove={handleRemove}
                    />} />
                    <Route path="/cart" element={<Cart
                        quantities={quantities}
                        cartItems={cartItems}
                        onAdd={handleAdd}
                        onRemove={handleRemove}
                        onOrderClick={handleOrderClick}
                    />} />
                </Routes>

                
            </div>
                {showConfirmation && (
                                    <OrderConfirmationModal onClose={handleCloseConfirmation} />
                                )}
            
        </Router>
    );
}

export default App;