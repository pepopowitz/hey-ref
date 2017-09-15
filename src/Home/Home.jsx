import React from 'react';

import Clock from '../Clock';
import Scoreboard from '../Scoreboard';

export default function Home() {
    return (
        <section className="columns is-vcentered is-full-height">
            <div className="column has-text-centered">
                <section className="hero is-primary">
                    <div className="hero-body">
                        <h1 className="title">Hey, Ref!</h1>
                    </div>
                </section>
                <Clock />
                <hr />
                <Scoreboard />
                <h6 className="subtitle">(c) 2017 Steven J Hicks</h6>
            </div>
        </section>
    );
}
