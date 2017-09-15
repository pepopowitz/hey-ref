import React from 'react';

import periods from '../periods';
import Period from './Period';

export default function PeriodSelector({ activePeriod, onPeriodSelected }) {
    return (
        <div className="column">
            <div className="field has-addons has-addons-centered">
                {periods.map(period => (
                    <Period
                        key={period.name}
                        activePeriod={activePeriod}
                        period={period}
                        onPeriodSelected={onPeriodSelected}
                    />
                ))}
            </div>
        </div>
    );
}
