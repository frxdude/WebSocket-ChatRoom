import MainScreen from '../screens/MainScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import AboutMeScreen from '../screens/AboutMeScreen.js';
import NewRoomScreen from '../screens/NewRoomScreen.js';
import { Router, Switch, Route } from "react-router-dom";
import history from '../history.js'

function Navigation() {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path={"/"} component={LoginScreen} />
          <Route
              exact
              path={"/MainScreen"}
              component={MainScreen}
          />
          <Route
              exact
              path={"/AboutMe"}
              component={AboutMeScreen}
          />
          <Route
              exact
              path={"/NewRoomScreen"}
              component={NewRoomScreen}
          />
      </Switch>
  </Router>
  );
}

export default Navigation;
