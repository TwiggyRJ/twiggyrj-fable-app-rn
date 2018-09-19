import React, { Component } from 'react';
import { AppLoader } from 'react-native-anubis-component-library';
import AppCenter from 'appcenter';
import Analytics from 'appcenter-analytics';
import SplashScreen from 'react-native-splash-screen';
import App from './app';

export default class AppInit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false,
      rootKey: Math.random(),
    };

    this.resetAnimation = this.resetAnimation.bind(this);
    console.disableYellowBox = true;
  }

  componentDidMount() {
    SplashScreen.hide();
    this.enableTracking();
    this.resetAnimation();
  }

  resetAnimation() {
    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 250);
  }

  async enableTracking() {
    await Analytics.setEnabled(true);
  }
  
  render() {
    return (
      <AppLoader
        image={require('../assets/images/loader.png')}
        isAppLoaded={true}
        splashscreenBackground="#4276ba"
      >
        <App />
      </AppLoader>
    );
  }
}
