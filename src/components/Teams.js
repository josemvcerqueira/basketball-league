import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { getTeamNames } from "../api";

class Teams extends Component {
	state = {
		teamNames: [],
		loading: true
	};

	componentDidMount() {
		this.fetchTeamNames();
	}

	fetchTeamNames = async () => {
		const teamNames = await getTeamNames();
		this.setState(() => ({
			loading: false,
			teamNames
		}));
	};

	render() {
		const { loading, teamNames } = this.state;
		const { location, match } = this.props;
		return (
			<div className="container two-column">
				<Sidebar
					loading={loading}
					title="Teams"
					list={teamNames}
					{...this.props}
				/>

				{loading === false && location.pathname === "/teams" ? (
					<div className="sidebar-instruction">Select a team</div>
				) : null}
			</div>
		);
	}
}

export default Teams;
