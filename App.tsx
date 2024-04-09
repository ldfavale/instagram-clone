import React from 'react'
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react-native';
import Client from './src/apollo/Client';

Amplify.configure(config);

const App = () => {
  return (
    <Authenticator.Provider>
      <Client>
        <Navigation />
      </Client>
    </Authenticator.Provider>
  );
}

export default App;
