import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";
import Navbar from "./Navbar";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/players" component={Players} />
				<Route path="/teams" component={Teams} />
			</div>
		);
	}
}

export default App;
