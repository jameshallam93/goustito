import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <header>
            <h1>goustito</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">RECIPES</Link>
                    </li>
                    <li>
                        <Link to="/feed">FEED</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export { Header };