import React, { PureComponent } from 'react';
import Router from './Router';
import { Provider } from 'react-redux'
import { store } from './store'
import NavigationService from './store/NavigationService'


export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>

    );
  }
}

