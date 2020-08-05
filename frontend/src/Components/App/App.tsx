import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import RecipesPage from '../Recipe/RecipesPage';
import NoMatch from '../common/NoMatch';


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Switch>
        <Route path="/" exact component={RecipesPage} />
        <Route component={NoMatch} />
        </Switch>
    </div>
  );
}

export default App;
