import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import myTheme from './my-theme';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider muiTheme={myTheme} >
    <App />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

