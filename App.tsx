import React from 'react'
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react-native';

Amplify.configure(config);

const App = () => {
  return (
    <Authenticator.Provider>
      <Navigation />
    </Authenticator.Provider>
  );
}

export default App;
