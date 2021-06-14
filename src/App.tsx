import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/home/Home";
import { LoginPage } from "./components/login/LoginPage";
import { Header } from "./components/pageElements/header/Header";
import { UserVault } from "./components/vault/UserVault";

import "./app.scss";


const App: React.FunctionComponent = () => {

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
