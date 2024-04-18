import React from 'react'
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react-native';
import Client from './src/apollo/Client';
import { MenuProvider } from 'react-native-popup-menu';

Amplify.configure(config);

const App = () => {
  return (
    <Authenticator.Provider>
      <MenuProvider>
        <Client>
          <Navigation />
        </Client>
      </MenuProvider>
    </Authenticator.Provider>
  );
}

export default App;
