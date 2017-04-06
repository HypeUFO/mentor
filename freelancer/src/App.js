import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.component';
import SignUpModal from './signup-modal.component';
import SideMenu from './main-menu.component';
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginModal from './login-modal.component';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="app">
        {/*<div className="app-header">
        </div>*/}
        <Header className="app-header" />
        <div className="container-fluid" style={{backgroundColor: "#eee"}}>
          <div className="col-xs-3">
          <SideMenu />
          </div>
          <div className="col-xs-9" style={{textAlign: 'center'}}>
            Main Content!!!!
            </div>
        </div>
      </div>
    );
  }
}

export default App;
