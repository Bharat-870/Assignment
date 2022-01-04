import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import NextPage from './components/NextPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import react, { Fragment } from 'react';

function App() {
  return (
      <Router>
        <Fragment>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Form} />
              <Route exact path='/nextpage' component={NextPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>    
  );
}

export default App;
