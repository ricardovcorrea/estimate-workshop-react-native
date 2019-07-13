if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React, { Component } from 'react';

import AppNavigator  from './src/utils/router';

export default class App extends Component {
    
  render() {
    return (
      <AppNavigator />
    );
  }

}

