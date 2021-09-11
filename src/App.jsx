import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './providers/Theme';
import HomePage from './Components/HomePage/HomePage';
import './App.css'
import AboutClub from './Components/AboutClub/AboutClub';
import TeamHolder from './Components/TeamHolder/TeamHolder';
import PlayersFilterContext from './contexts/PlayersFilterContext';
import { useState } from 'react';
import NewsPage from './Components/NewsPage/NewsPage';

const filterPrototype = {
  goalies: true,
  guards: true,
  attackers: true,
}

function App() {
  const [playersFilter, setPlayersFilter] = useState(filterPrototype)
  return (
    <Theme>
      <PlayersFilterContext.Provider value={{playersFilter: playersFilter, setPlayersFilter: setPlayersFilter}}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/ChervenaZvezda' component={HomePage}/>
            <Route exact path='/ChervenaZvezda/news' component={NewsPage}/>
            <Route exact path='/ChervenaZvezda/club' component={AboutClub}/>
            <Route exact path='/ChervenaZvezda/team' component={TeamHolder}/>
          </Switch>
        </Router>
      </PlayersFilterContext.Provider>
    </Theme>
  );
}

export default App;
