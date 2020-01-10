import React, { Component, Suspense , lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Checkout = lazy(() => import ('./containers/Checkout/Checkout'));
const Orders = lazy(() => import ('./containers/Orders/Orders'));

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignUp();
  }
  render() {
    let routes = (
      <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
        </Switch>
        </Suspense>
      )
    }

    return (
      <div >
        <Layout>
        {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
