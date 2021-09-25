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
import CalendarMain from './Components/CalendarMain/CalendarMain';
import AdminPage from './Components/AdminPage/AdminPage';

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
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/news' component={NewsPage}/>
            <Route exact path='/club' component={AboutClub}/>
            <Route exact path='/team' component={TeamHolder}/>
            <Route exact path='/calendar' component={CalendarMain}/>
            <Route exact path='/admin' component={AdminPage}/>
          </Switch>
        </Router>
      </PlayersFilterContext.Provider>
    </Theme>
  );
}

export default App;
