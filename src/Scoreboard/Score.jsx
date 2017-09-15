import React from 'react';

export default function Score({
    name,
    score,
    onScoreDecremented,
    onScoreIncremented
}) {
    return (
        <div className="column score">
            <h2 className="subtitle">{name}</h2>
            <h1 className="title is-1">{score}</h1>
            <div className="level column">
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <a
                            className="button is-large"
                            onClick={onScoreDecremented}
                        >
                            <span>-</span>
                        </a>
                    </div>
                    <div className="control">
                        <a
                            className="button is-large"
                            onClick={onScoreIncremented}
                        >
                            <span>+</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
