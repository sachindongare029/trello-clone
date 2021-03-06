import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import trelloApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// Create store
const store = createStore(trelloApp);

ReactModal.setAppElement('#root');
render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
