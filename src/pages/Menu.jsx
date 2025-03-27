import React from "react";
import { Link } from "react-router-dom";
import profileImage1 from "../image/men.svg";
import profileImage2 from "../image/c.png";
import profileImage3 from "../image/Vector.svg";
import MenuItem from "../components/MenuItem";

function Menu({ quantities, onAdd, onRemove }) {
    return (
        <div className="menu-container">
            <div className="header">
                <Link to="/">
                    <button className="table-button">
                        <img src={profileImage1} alt="IMG" className="profile-icon"/>
                        <span>столик 7</span>
                    </button>
                </Link>
                <Link to="/cart">
                    <button className="cart-button">
                        <img src={profileImage2} alt="c" className="cart-icon"/>
                    </button>
                </Link>
            </div>

            <div className="menu-title">Меню</div>

            <div className="search-bar">
                <span className="search-icon">
                    <img src={profileImage3} alt="v" className="search-icon"/>
                </span>
                <input type="text" placeholder="Поиск"/>
            </div>

            <div className="categories">
                <button className="category-button">категория</button>
                <button className="category-button">категория</button>
                <button className="category-button">категория</button>
                <button className="category-button">кате</button>
            </div>

            <div className="items-grid">
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте1"]}
                    onAdd={() => onAdd("Латте1")}
                    onRemove={() => onRemove("Латте1")}
                />
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте2"]}
                    onAdd={() => onAdd("Латте2")}
                    onRemove={() => onRemove("Латте2")}
                />
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте3"]}
                    onAdd={() => onAdd("Латте3")}
                    onRemove={() => onRemove("Латте3")}
                />
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте4"]}
                    onAdd={() => onAdd("Латте4")}
                    onRemove={() => onRemove("Латте4")}
                />
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте5"]}
                    onAdd={() => onAdd("Латте5")}
                    onRemove={() => onRemove("Латте5")}
                />
                <MenuItem
                    name="Латте"
                    quantity={quantities["Латте6"]}
                    onAdd={() => onAdd("Латте6")}
                    onRemove={() => onRemove("Латте6")}
                />
            </div>
        </div>
    );
}

export default Menu;