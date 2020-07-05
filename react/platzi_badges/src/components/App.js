import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
