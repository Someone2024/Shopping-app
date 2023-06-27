import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
          <h1><Link to="/">NSFW SHOP</Link></h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/cart">cart icon</Link></li>
        </ul>
    )
}