import React from 'react';
import TimeFormat from 'hh-mm-ss';
import classNames from 'class-names';

import PeriodSelector from './PeriodSelector';
import StartStop from './StartStop';
import NextPeriod from './NextPeriod';

import './Clock.css';

export default function Clock({
    secondsRemaining,
    onTimeStarted,
    onTimeStopped,
    isRunning,
    activePeriod,
    onPeriodSelected,
    onNextPeriodSelected
}) {
    const formattedSecondsRemaining = TimeFormat.fromS(secondsRemaining);
    const clockClasses = classNames('title', 'clock', {
        expired: secondsRemaining < 0
    });

    return (
        <div className="level column">
            <PeriodSelector
                activePeriod={activePeriod}
                onPeriodSelected={onPeriodSelected}
            />
            <div className="level column">
                <h1 className={clockClasses}>{formattedSecondsRemaining}</h1>
            </div>
            <div className="level column">
                <div className="field has-addons has-addons-centered">
                    <StartStop
                        isRunning={isRunning}
                        onTimeStarted={onTimeStarted}
                        onTimeStopped={onTimeStopped}
                    />
                    <NextPeriod onNextPeriodSelected={onNextPeriodSelected} />
                </div>
            </div>
        </div>
    );
}
