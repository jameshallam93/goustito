import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/pageElements/header/Header";
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
							<h1>Login</h1>
						</Route>
					</Switch>

				</div>
			</Router>

		</div>
	);
};

export default App;
