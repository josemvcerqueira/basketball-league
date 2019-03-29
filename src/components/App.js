import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import DynamicImport from "./DynamicImport";

const Home = props => (
	<DynamicImport load={() => import("./Home")}>
		{Component =>
			Component === null ? <Loading /> : <Component {...props} />
		}
	</DynamicImport>
);

const Players = props => (
	<DynamicImport load={() => import("./Players")}>
		{Component =>
			Component === null ? <Loading /> : <Component {...props} />
		}
	</DynamicImport>
);

const Teams = props => (
	<DynamicImport load={() => import("./Teams")}>
		{Component =>
			Component === null ? <Loading /> : <Component {...props} />
		}
	</DynamicImport>
);

const TeamPage = props => (
	<DynamicImport load={() => import("./TeamPage")}>
		{Component =>
			Component === null ? <Loading /> : <Component {...props} />
		}
	</DynamicImport>
);

const Articles = props => (
	<DynamicImport load={() => import("./Articles")}>
		{Component =>
			Component === null ? <Loading /> : <Component {...props} />
		}
	</DynamicImport>
);

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/players" component={Players} />
					<Route path="/teams" component={Teams} />
					<Route exact path="/:teamId" component={TeamPage} />
					<Route path="/:teamId/articles" component={Articles} />
					<Route
						render={() => (
							<h1 className="text-center">
								<span role="img" aria-label="poop" label="poop">
									💩
								</span>
								Four oh Four oops
								<span role="img" aria-label="poop" label="poop">
									💩
								</span>
							</h1>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
