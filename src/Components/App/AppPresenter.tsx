import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AddPlace from '../../Routes/AddPlace';
import EditAccount from '../../Routes/EditAccount';
import Home from '../../Routes/Home';
import OutHome from '../../Routes/OutHome';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import VerifyPhone from '../../Routes/VerifyPhone';
import SocialLogin from '../../Routes/SocialLogin';
import FindAddress from '../../Routes/FindAddress';

interface Props {
  isLoggedIn: boolean;
}

const AppPresenter: React.FC<Props> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRouters /> : <LoggedOutRouters />}
  </BrowserRouter>
);

const LoggedOutRouters: React.FC = () => (
  <Switch>
    <Route path="/" exact component={OutHome} />
    <Route path="/phone-login" exact component={PhoneLogin} />
    <Route path="/verify-phone/:phonenumber" exact component={VerifyPhone} />
    <Route path="/social-login" exact component={SocialLogin} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRouters: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/add-palce" exact component={AddPlace} />
    <Route path="/edit-account" exact component={EditAccount} />
    <Route path="/places" exact component={Places} />
    <Route path="/ride" exact component={Ride} />
    <Route path="/settings" exact component={Settings} />
    <Route path="/find-address" exact component={FindAddress} />
    <Redirect from="*" to="/" />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
