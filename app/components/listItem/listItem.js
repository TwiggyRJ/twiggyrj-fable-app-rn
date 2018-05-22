import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemStyle: null,
      itemTextStyle: null,
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return(
      <TouchableWithoutFeedback onPressIn={() => this.setState({itemStyle: this.props.itemstyles.listItemActive, itemTextStyle: this.props.itemstyles.listItemTextActive})}  onPressOut={() => this.setState({itemStyle: this.props.itemstyles.listItemActiveRemoved, itemTextStyle: this.props.itemstyles.listItemTextActiveRemoved})}>
        <View style={[styles.item, this.props.itemstyles.listItem, this.state.itemStyle, this.props.index === 0 ? this.props.itemstyles.listItemFirst : null ]}>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemstyles.listItemTitle, this.state.itemTextStyle]} key={this.props.item.id + '_title'}>{this.props.item.expense}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemstyles.listItemTitle, styles.alignRight, this.state.itemTextStyle]} key={this.props.item.id + '_amount'}>{ "-£" + this.props.item.amount}</Text>
            </View>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemstyles.listItemText, this.state.itemTextStyle]} key={this.props.item.id + '_date'}>{this.props.item.date}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemstyles.listItemText, styles.alignRight, this.state.itemTextStyle]} key={this.props.item.id + '_type'}>{this.props.item.type}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
