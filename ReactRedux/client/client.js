import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TaskReducer from '../src/reducers/TaskReducer';
import App from '../src/components/App';

const store = createStore(TaskReducer,[]);
render(<Provider store={store}><App/></Provider>, document.getElementById('app'))