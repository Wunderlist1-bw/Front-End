import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { todoReducer as reducer } from './reducers';
import TodoList from './components/Todos/TodoList';
import Login from './components/Credentialing/Login';
import Register from './components/Credentialing/Register';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {




  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <Navbar href='/'>
                <img className="logo" src={require("./assets/DashLogo.png")}  alt="Company logo." />
            </Navbar>
          </header>

          <main>
          <Switch>
            <ProtectedRoute exact path='/list' component={TodoList} />

            {/* <ProtectedRoute exact path='/update-task/:id'
              render={props => {
                return <UpdateTask {...props} />
              }} /> */}

            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            </Switch>
          </main>
        </Provider>
      </div>
    </Router>
  );
}

export default App;

