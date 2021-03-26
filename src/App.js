import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}

        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />} />
              {/* <Route
                  exact
                  path="/case/zyaniaalonzo"
                  render={() => <ZyaniaAlonzo />}
                />
                <Route
                  exact
                  path="/case/irielivity"
                  render={() => <IrieLivity />}
                />
                <Route
                  exact
                  path="/case-studies"
                  render={() => <CaseStudies />}
                /> */}
            </Switch>
          )}
        />
      </div>

      {/* <Navigation /> */}
    </Router>
  );
}

export default App;
