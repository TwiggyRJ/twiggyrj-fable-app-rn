import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import * as storiesActions from "../../../../actions/stories";
import Button from "../../../../components/button";

class AboutContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: "Fable",
      headerRight: (
        <Button
          customStyles={{ padding: 20 }}
          onPress={navigation.navigate("DrawerToggle")}
          type="icon"
          icon={<Icon name="md-menu" size={30} color="#333" />}
        />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      </View>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    stories: state.stories
  };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    onGetStories: () => dispatch(storiesActions.getStories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
