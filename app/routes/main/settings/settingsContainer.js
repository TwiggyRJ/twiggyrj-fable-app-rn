import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';
import autobind from 'autobind-decorator';
import { theme } from '../../../config/styles';
import Author from '../../../components/author';
import Button from '../../../components/button';
import FlattendList from '../../../components/flattendList';
import ItemContainer from '../../../components/itemContainer';
import {
  MenuContainer,
  SettingsContainer,
  VersionContainer,
} from './styles';

@inject('authStore')
@observer
class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: theme.header.text,
        fontFamily: theme.header.font,
        fontSize: 30,
        fontWeight: undefined,
        flex: 0.85,
        textAlign: 'center',
      },
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.authStore.authenticate();
  }

  @autobind
  navigateToItem(item, props) {
    this.props.navigation.navigate(
      item,
      props,
    );
  }

  render() {
    return (
      <ScrollView>
        <MenuContainer>
          <SettingsContainer>
            <Button
              type="container"
              component={
                <ItemContainer
                  borderBottom
                  component={
                    <Text>Notifications</Text>
                  }
                />
              }
            />
            <Button
              type="container"
              component={
                <ItemContainer
                  borderBottom
                  component={
                    <Text>Account</Text>
                  }
                />
              }
            />
          </SettingsContainer>
          <SettingsContainer>
            <Button
              type="container"
              component={
                <ItemContainer
                  borderBottom
                  component={
                    <Text>Clear cache</Text>
                  }
                />
              }
            />
          </SettingsContainer>
          <SettingsContainer>
            <Button
              type="container"
              component={
                <ItemContainer
                  borderBottom
                  component={
                    <Text>Sign out</Text>
                  }
                />
              }
            />
          </SettingsContainer>
          <VersionContainer>
            <Text>
              Version {VersionNumber.appVersion}
            </Text>
          </VersionContainer>
        </MenuContainer>
      </ScrollView>
    );
  }
}

export default Settings;
