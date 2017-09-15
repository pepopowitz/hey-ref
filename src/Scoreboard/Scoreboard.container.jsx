import React from 'react';

import Scoreboard from './Scoreboard';

class ScoreboardContainer extends React.Component {
    state = {
        home: 0,
        away: 0
    };

    render() {
        return (
            <Scoreboard
                home={this.state.home}
                away={this.state.away}
                onAwayIncremented={this.handleAwayIncremented}
                onAwayDecremented={this.handleAwayDecremented}
                onHomeIncremented={this.handleHomeIncremented}
                onHomeDecremented={this.handleHomeDecremented}
            />
        );
    }

    handleAwayIncremented = () => {
        this.setState(prevState => ({
            away: prevState.away + 1
        }));
    };

    handleAwayDecremented = () => {
        this.setState(prevState => ({
            away: prevState.away - 1
        }));
    };

    handleHomeIncremented = () => {
        this.setState(prevState => ({
            home: prevState.home + 1
        }));
    };

    handleHomeDecremented = () => {
        this.setState(prevState => ({
            home: prevState.home - 1
        }));
    };
}

export default ScoreboardContainer;
