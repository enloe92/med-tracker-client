import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import PrivateRoute from '../../utilities/PrivateRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicOnlyRoute from '../../utilities/PublicOnlyRoute';
import Header from '../Header/Header';
import HomePage from '../../routes/HomePage/HomePage';
import RulesPage from '../../routes/RulesPage/RulesPage';
import GamesRulesPage from '../../routes/GameRulesPage/GameRulesPage';
import SearchPage from '../../routes/SearchPage/SearchPage';
import ResultsPage from '../../routes/ResultsPage/ResultsPage';
import TokenService from '../../services/token-service';
import Footer from '../Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(TokenService.hasAuthToken());

  function whenLoggedIn() {
    setIsLoggedIn(true);
  }

  function whenLoggedOut() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header" id='myHeader'>
        <Header
          whenLoggedOut={whenLoggedOut}
          isLoggedIn={isLoggedIn}
        />
      </header>
      <main>
        <Switch>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <PublicOnlyRoute
            path='/Login'
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
          <PublicOnlyRoute
            path='/Register'
            component={RegistrationPage}
          />
          <PrivateRoute
            path='/Home'
            component={HomePage}
          />
          <PrivateRoute
            path='/MyRules'
            component={RulesPage} />
          <PrivateRoute
            path='/Rules/:gameId'
            component={GamesRulesPage}
          />
          <PrivateRoute
            path='/Search'
            component={SearchPage}
            searchType='Search'
          />
          <PrivateRoute
            path='/Results/:gameId'
            component={ResultsPage}
          />
          <PrivateRoute
            path='/Add'
            component={SearchPage}
            searchType='Add'
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
