import React from 'react';

export default function StartStop({ onTimeStarted, onTimeStopped, isRunning }) {
    if (isRunning) {
        return (
            <div className="control">
                <a className="button" onClick={onTimeStopped}>
                    <span>Stop</span>
                </a>
            </div>
        );
    }
    return (
        <div className="control">
            <a className="button" onClick={onTimeStarted}>
                <span>Start</span>
            </a>
        </div>
    );
}
