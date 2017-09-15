import React from 'react';

import classNames from 'class-names';

export default function Period({ activePeriod, period, onPeriodSelected }) {
    const buttonClasses = classNames('button', {
        'is-primary': activePeriod.name === period.name
    });
    return (
        <div className="control">
            <a
                className={buttonClasses}
                onClick={() => onPeriodSelected(period)}
            >
                <span>{period.name}</span>
            </a>
        </div>
    );
}
