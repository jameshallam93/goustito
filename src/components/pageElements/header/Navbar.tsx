import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
	return (
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
	);
};

export { Navbar };