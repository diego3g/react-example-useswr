import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './pages/List';
import Detail from './pages/Detail';

export default () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/detail/:full_name+" component={Detail} />
  </Switch>
);