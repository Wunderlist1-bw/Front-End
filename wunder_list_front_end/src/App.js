import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { todoReducer as reducer } from './reducers';
import TodoList from './components/TodoList';

import TodoForm from './components/TodoForm';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <p>WundererererList</p>
            {/* <TodoList /> */}
          </header>
          <Route exact path='/' component={TodoList} />
          <Link to='/login'>LOG IN</Link>
          <TodoForm />
          <Switch>
            <ProtectedRoute path='/list' />

          </Switch>

        </Provider>
      </div>
    </Router>
  );
}

export default App;

