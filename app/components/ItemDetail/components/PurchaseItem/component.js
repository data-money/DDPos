import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
  },

  text: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 18,
  },

  bottomLine: {
    height: 1,
    marginLeft: 8,
    backgroundColor: 'gray',
  }

});

export default class PurchaseItem extends Component {

  render(){
    return (
      <View style={styles.container} >
        <Text style={styles.text} >
          {this.props.item.date}
        </Text>
        <View style={styles.bottomLine} />
      </View>
    )
  }
}
