import React from 'react';

export default function NextPeriod({ onNextPeriodSelected }) {
    return (
        <div className="control">
            <a className="button" onClick={onNextPeriodSelected}>
                <span>Next Interval</span>
            </a>
        </div>
    );
}
