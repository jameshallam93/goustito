import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../../redux/store";

const Navbar: React.FunctionComponent = () => {

	const currentUser = useSelector<AppState, string | null>(state => state.users.user.username);

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
					{
						currentUser ?
							<Link to="/vault">{`${currentUser.toUpperCase()}'S VAULT`}</Link>
							:
							<Link to="/login">LOGIN</Link>
					}
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };