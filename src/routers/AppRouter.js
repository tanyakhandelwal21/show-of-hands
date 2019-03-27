import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ViewPage from '../components/ViewPage';
import AddPollPage from '../components/AddPollPage';
import AnswerPollPage from '../components/AnswerPollPage';
import CreatePage from '../components/CreatePage';
import EditPollPage from '../components/EditPollPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import WelcomePage from '../components/WelcomePage';
import LoginPage from '../components/LoginPage';
import ViewPollPage from '../components/ViewPollPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/welcome" component={WelcomePage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/polls" component={ViewPage} exact={true} />
        <PrivateRoute path="/add-poll" component={CreatePage} exact={true} />
        <PrivateRoute path="/polls/edit" component={EditPollPage} exact={true} />
        <PrivateRoute path="/polls/:id" component={ViewPollPage} exact={true} />
        <PrivateRoute path="/polls/:id/edit" component={EditPollPage} exact={true} />
        <PrivateRoute path="/polls/:id/answer" component={AnswerPollPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
