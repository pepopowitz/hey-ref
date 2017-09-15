import React from 'react';

import Score from './Score';

import './Scoreboard.css';

export default function Scoreboard({
    home,
    away,
    onAwayIncremented,
    onAwayDecremented,
    onHomeIncremented,
    onHomeDecremented
}) {
    return (
        <div className="level scoreboard column">
            <div className="columns is-mobile">
                <Score
                    name="Away"
                    score={away}
                    onScoreIncremented={onAwayIncremented}
                    onScoreDecremented={onAwayDecremented}
                />
                <Score
                    name="Home"
                    score={home}
                    onScoreIncremented={onHomeIncremented}
                    onScoreDecremented={onHomeDecremented}
                />
            </div>
        </div>
    );
}
