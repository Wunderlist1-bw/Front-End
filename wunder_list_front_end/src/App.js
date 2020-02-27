import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { todoReducer as reducer } from './reducers';
import TodoList from './components/TodoList';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <p>
            WundererererList
        </p>
          <TodoList />
        </header>
      </Provider>
    </div>
  );
}

export default App;

