import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-anubis-component-library';
import autobind from 'autobind-decorator';
import { theme } from '../../../config/styles';
import Author from '../../../components/author';
import FlattendList from '../../../components/flattendList';
import ItemContainer from '../../../components/itemContainer';
import {
  AuthorStyle,
  AuthorLabel,
  MenuContainer,
  SettingsContainer,
} from './styles';

@inject('authStore')
@observer
class Menu extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Menu',
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
            {
              !this.props.authStore.isLoading && this.props.authStore.auth ?
                <Button
                  platformProps={{
                    containerStyles: '',
                    isHighlight: true,
                    ripple: theme.button.ripple.light,
                    rippleBorder: true,
                  }}
                  type="container"
                  customStyles=""
                  onPress={() => this.navigateToItem('Profile', { type: 'you' })}
                >
                  <ItemContainer>
                    <Author
                      author={`${this.props.authStore.auth.firstname} ${this.props.authStore.auth.lastname}`}
                      avatar={{
                        src: this.props.authStore.auth.avatar,
                        height: 50,
                        width: 50,
                      }}
                      size={18}
                      customStyles={AuthorStyle}
                      color={theme.text.dark}
                      component={
                        <AuthorLabel>
                          View profile
                          </AuthorLabel>
                      }
                    />
                  </ItemContainer>
                </Button>
              :
                null
            }
            <Button
              platformProps={{
                containerStyles: '',
                isHighlight: true,
                ripple: theme.button.ripple.light,
                rippleBorder: true,
              }}
              type="container"
            >
              <ItemContainer borderBottom>
                <Text>Stories</Text>
              </ItemContainer>
            </Button>
            <Button
              platformProps={{
                containerStyles: '',
                isHighlight: true,
                ripple: theme.button.ripple.light,
                rippleBorder: true,
              }}
              type="container"
            >
              <ItemContainer borderBottom>
                <Text>Stats</Text>
              </ItemContainer>
            </Button>
          </SettingsContainer>
        </MenuContainer>
      </ScrollView>
    );
  }
}

export default Menu;
