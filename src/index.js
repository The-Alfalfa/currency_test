// Import needed libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./js/components/container/App";
import registerServiceWorker from './registerServiceWorker';

// Render the SPA into HTML element with id='root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
