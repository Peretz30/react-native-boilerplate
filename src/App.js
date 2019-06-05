import React, { PureComponent } from 'react';
import Router from './Router';
import { Provider } from 'react-redux'
import { store,persistor } from './store'
import NavigationService from './store/NavigationService'
import { PersistGate } from 'redux-persist/integration/react'


export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        </PersistGate>
      </Provider>

    );
  }
}

