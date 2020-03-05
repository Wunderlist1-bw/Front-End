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
<<<<<<< HEAD
// import TodoForm from './components/TodoForm';
import UpdateTask from './components/UpdateTask';
=======
import Register from './components/Register';
>>>>>>> ccb950fd08222baaab420079995dfd7369ff5faf

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {

  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <header className="mainmenu">
            <Navbar href='/'>
              <div className="logoymenu logomenu1">
                <img className="logo" src="./assets/DashLogo.png" alt="Company logo." />
                <a href="#">How it Works</a>
                <a href="#">Features</a>
                <a href="#testimonial">Testimonials</a>
              </div>
              <div className="logoymenu logomenu2">
              <div id="login">Login</div></div>
            </Navbar>
          </header>

          {/* <Route exact path='/' component={TodoList} /> */}
          {/* <Route path='/login' component={Login} /> */}
          {/* <TodoForm /> */}
          {/* <Login /> */}

          <Switch>
            <ProtectedRoute exact path='/list' component={TodoList} />


            <ProtectedRoute exact path='/update-task/:id'
              render={props => {
                return <UpdateTask {...props} />
              }} />


            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;

