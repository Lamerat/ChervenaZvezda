import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './providers/Theme';
import HomePage from './Components/HomePage/HomePage';
import './App.css'
import AboutClub from './Components/AboutClub/AboutClub';

function App() {
  return (
    <Theme>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/club' component={AboutClub}/>
          </Switch>
        </Router>
    </Theme>
  );
}

export default App;
