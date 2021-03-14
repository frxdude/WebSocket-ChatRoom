// import logo from './logo.svg';
// import './App.css';
// import MainScreen from './screens/MainScreen.js';
// import LoginScreen from './screens/LoginScreen.js'
// import AboutMeScreen from './screens/AboutMeScreen.js'
// import { Router, Switch, Route } from "react-router-dom";
// import history from './history.js'

// function App() {
//   return (
//     <Router history={history}>
//       <Switch>
//           <Route exact path={"/"} component={LoginScreen} />
//           <Route
//               exact
//               path={"/MainScreen"}
//               component={MainScreen}
//           />
//           <Route
//               exact
//               path={"/AboutMe"}
//               component={AboutMeScreen}
//           />
//       </Switch>
//   </Router>
//     // <Lab2/>
//   );
// }

// export default App;
import './App.css';
import MainScreen from './screens/MainScreen.js';
import LoginScreen from './screens/LoginScreen.js'
import AboutMeScreen from './screens/AboutMeScreen.js'
import Navigation from './helper/Navigation.js'
import { Router, Switch, Route } from "react-router-dom";
import history from './history.js'

function App() {
  return (
    <Navigation/>
  );
}

export default App;

