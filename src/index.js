import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import fs from 'fs';
import path from 'path';

const render = () => {
  const App = require('./src/App').App;
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
}

render();
if (module.hot) { module.hot.accept(render); }