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

  textArea: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  receiverText: {
    fontSize: 18,
    color: 'black',
    textAlignVertical: 'center',
  },

  dateText: {
    fontSize: 14,
    color: 'gray',
    textAlignVertical: 'center',
  },

  bottomLine: {
    height: 1,
    backgroundColor: 'gray',
    marginLeft: 8,
  }

});

export default class PurchaseItem extends Component {

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.textArea}>
          <Text style={styles.receiverText} >
            {this.props.item.receiver}
          </Text>
          <Text style={styles.dateText} >
            {this.props.item.date}
          </Text>
        </View>
        <View style={styles.bottomLine} />
      </View>
    )
  }
}
