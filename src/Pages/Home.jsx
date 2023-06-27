import NavBar from "./NavBar"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <button id="shopBtn"><Link to="/shop">Go Shopping</Link></button>
        </div>
    )
}