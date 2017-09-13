import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';

import Home from '../Home';

export default (
    <Layout>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Layout>
);
