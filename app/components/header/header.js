import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  const { cover, title } = props;
  return (
    <View style={styles.header}>
      <ImageBackground source={{ uri: cover }}>
        <Text style={styles.titleText}>{ title }</Text>
        <Text style={styles.subtitleText}>From now to the end of the time</Text>
        <View style={styles.expenditureSummary}>
          <Text style={styles.expenditurePos}>In: <Text>+£5,500.00</Text></Text>
          <Text style={styles.expenditureNeg}>Out: <Text>-£4,750.54</Text></Text>
        </View>
      </ImageBackground>
    </View>
  );
};

Header.propTypes = {

};

export default Header;
