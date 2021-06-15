import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/home/Home";
import { LoginPage } from "./components/login/LoginPage";
import { Header } from "./components/pageElements/header/Header";
import { UserVault } from "./components/vault/UserVault";
import { VALIDATE_SESSION_DETAILS } from "./redux/actions/actions";

import "./app.scss";


const App: React.FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const loggedUser = window.localStorage.getItem("username");
		const sessionExpiry = (
			Number(localStorage.getItem("token-expiry"))
		);
		dispatch(VALIDATE_SESSION_DETAILS(loggedUser, sessionExpiry));
	}, []);

	return (
		<div className="App">
			<Router>
				<Header />
				<div className="page-content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/feed">
							<h1>Feed</h1>
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/vault">
							<UserVault />
						</Route>
					</Switch>

				</div>
			</Router>

		</div>
	);
};

export default App;
