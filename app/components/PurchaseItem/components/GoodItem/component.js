import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginTop: 8,
    marginBottom: 0,
  },

  name: {
    flex: 0.8,
    alignSelf: 'stretch',
    color: 'black',
    fontSize: 16,

  },

  number: {
    flex: 0.1,
    color: 'slategray',
    fontSize: 16,
    textAlign: 'right',
  },

  unit: {
    flex: 0.1,
    color: 'slategray',
    fontSize: 16,
    textAlign: 'right',

  },

})

export default class GoodItem extends Component {

  constructor(props) {
    super(props);
    this.touchAction = this.touchAction.bind(this);
  }

  touchAction() {
    const { navigate } = this.props.navigation;
    navigate('ItemDetail', {iid: this.props.item.iid});
  }

  render() {
    let item = this.props.item;
    item = item !== 'undefined' ? item : {
      iid: 10,
      name: '豬豬豬豬豬豬豬豬豬豬豬',
      numric: 10,
      unit: '包',
    }

    return (
      <TouchableNativeFeedback onPress={this.touchAction}>
        <View style={styles.container} >
          <Text style={styles.name} >{item.name}</Text>
          <Text style={styles.number} >x {item.numric}</Text>
          <Text style={styles.unit} >{item.unit}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

}
