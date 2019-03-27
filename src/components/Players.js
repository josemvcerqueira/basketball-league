import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { getPlayers } from "../api";
import { parse } from "query-string";

class Players extends Component {
	state = {
		players: [],
		loading: true
	};

	componentDidMount() {
		const { location } = this.props;
		location.search
			? this.fetchPlayers(parse(location.search).teamId)
			: this.fetchPlayers();
	}

	fetchPlayers = async teamID => {
		const players = await getPlayers(teamID);
		this.setState(() => ({
			loading: false,
			players
		}));
	};
	render() {
		const { players, loading } = this.state;
		const { location } = this.props;
		console.log(location);
		return (
			<div className="container two-column">
				<Sidebar
					loading={loading}
					title="Players"
					list={players.map(player => player.name)}
					{...this.props}
				/>
				{loading === false && location.pathname === "/players" ? (
					<div className="sidebar-instruction">Select a Player</div>
				) : null}
			</div>
		);
	}
}

export default Players;
