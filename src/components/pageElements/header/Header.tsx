import React from "react";
import { Navbar } from "./Navbar";
import "./header.scss";

const Header: React.FunctionComponent = () => {
	return (
		<header>
			<h1>goustito</h1>
			<Navbar />
		</header>
	);
};
export { Header };