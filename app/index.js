import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react';
import { StackNavigator } from 'react-navigation';
import configureStore from "./config/store";
import Main from "./routes/main";
import Login from "./routes/login";
const { persistor, store } = configureStore();

const RootStack = StackNavigator(
  {
    Login: {
      path: '/',
      screen: Login,
    },
    Main: {
      path: '/main',
      screen: Main,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
            <RootStack />
        </PersistGate>
      </Provider>
    );
  }
}
