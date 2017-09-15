import React from 'react';
import findIndex from 'lodash/findIndex';

import Clock from './Clock';
import { secondsFromNow, secondsLeft } from './clock-math';

import periods from './periods';

class ClockContainer extends React.Component {
    state = {
        activePeriod: periods[0],
        secondsRemaining: periods[0].seconds,
        timerDoneAt: 0,
        isRunning: false
    };

    render() {
        return (
            <Clock
                {...this.state}
                onTimeStarted={this.handleTimeStarted}
                onTimeStopped={this.handleTimeStopped}
                onPeriodSelected={this.handlePeriodSelected}
                onNextPeriodSelected={this.handleNextPeriodSelected}
            />
        );
    }

    handleTimeStarted = () => {
        const timerDoneAt = secondsFromNow(this.state.secondsRemaining);
        this.setState({
            timerDoneAt,
            isRunning: true
        });
        this.interval = setInterval(this.handleTick, 200);
    };

    handleTimeStopped = () => {
        this.setState({
            isRunning: false
        });
        this.stopTimer();
    };

    handleTick = () => {
        this.setState(prevState => {
            const now = Date.now();

            if (prevState.timerDoneAt === 0) {
                this.stopTimer();
                return {};
            }

            const secondsRemaining = secondsLeft(now, prevState.timerDoneAt);

            if (secondsRemaining < -300) {
                this.stopTimer();
                return {};
            }

            return {
                secondsRemaining
            };
        });
    };

    handlePeriodSelected = period => {
        clearInterval(this.interval);
        this.setState({
            activePeriod: period,
            secondsRemaining: period.seconds,
            timerDoneAt: 0,
            isRunning: false
        });
    };
    handleNextPeriodSelected = () => {
        const currentPeriodIndex = findIndex(
            periods,
            period => period.name === this.state.activePeriod.name
        );

        if (currentPeriodIndex === periods.length - 1) {
            return;
        }

        const newPeriod = periods[currentPeriodIndex + 1];
        this.setState({
            activePeriod: newPeriod,
            secondsRemaining: newPeriod.seconds,
            timerDoneAt: 0,
            isRunning: false
        });
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };
}
export default ClockContainer;
