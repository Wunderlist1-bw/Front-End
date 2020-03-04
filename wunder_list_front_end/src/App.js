import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { todoReducer as reducer } from './reducers';
import TodoList from './components/TodoList';
import Login from './components/Login';
import TodoForm from './components/TodoForm';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {

  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <Navbar href='/'>
              <img src='./assets/DashLogo.png' alt='logo' />
            </Navbar>
          </header>

          {/* <Route exact path='/' component={TodoList} /> */}
          {/* <Route path='/login' component={Login} /> */}
          {/* <TodoForm /> */}
          {/* <Login /> */}

          <Switch>
            <ProtectedRoute exact path='/list' component={TodoList} />
            <Route exact path='/' component={Login} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;

