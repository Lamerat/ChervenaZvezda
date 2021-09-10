import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './providers/Theme';
import HomePage from './Components/HomePage/HomePage';
import './App.css'
import AboutClub from './Components/AboutClub/AboutClub';
import TeamHolder from './Components/TeamHolder/TeamHolder';

function App() {
  return (
    <Theme>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/ChervenaZvezda' component={HomePage}/>
            <Route exact path='/ChervenaZvezda/club' component={AboutClub}/>
            <Route exact path='/ChervenaZvezda/team' component={TeamHolder}/>
          </Switch>
        </Router>
    </Theme>
  );
}

export default App;
