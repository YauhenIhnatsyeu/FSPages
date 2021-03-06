import React from "react";

import TabPanel from "./tab-panel";
import LeaguePanel from "./league-panel";
import TeamPanel from "./team-panel";

export class MainTable extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__tab-panel-container">
						<TabPanel leaguesIds={this.props.leaguesIds} />
					</div>
				</div>
			</main>
		);
	}
}

export class MainTeams extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<LeaguePanel leaguesIds={this.props.leaguesIds} />
				</div>
			</main>
		);
	}
}

export class MainTeam extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__team-panel-container">
						<TeamPanel teamId={this.props.match.params.id} />
					</div>
				</div>
			</main>
		);
	}
}