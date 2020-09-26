import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPasssword from '../pages/ForgotPasssword';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPasssword} />

    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
