import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import Dimensions from 'Dimensions';

import GoodItem from './components/GoodItem';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  dateDiv: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateIcon: {
    width: 50,
    height: 50,
    margin: 8,

  },

  dateText: {
    marginLeft: 8,
    fontSize: 18,

  },

  purchaseImage: {
    width: width-16,
    height: width-16,
    margin: 8,

  },

  itemsDiv: {
    flexDirection: 'column',

  },

  itemsDivTitle: {
    color: 'royalblue',
    fontSize: 24,
    margin: 8,
    marginTop: 32,
  }

})

export default class PurchaseItem extends Component {

  render() {
    let items = [
      {
        iid: 10,
        name: '珠珠1號',
        numric: 10,
        unit: '包',
      },
      {
        iid: 10,
        name: '珠珠2號',
        numric: 20,
        unit: '顆',
      },
      {
        iid: 10,
        name: '珠珠3號',
        numric: 30,
        unit: '串',
      },
      {
        iid: 10,
        name: '珠珠4號',
        numric: 40,
        unit: '包',
      },
      {
        iid: 10,
        name: '珠珠5號',
        numric: 50,
        unit: '包',
      },
    ]

    let pic = require('./assets/noPic.png');
    console.log('purchaseItem: ' + JSON.stringify(this.props));
    let date = '2017-08-08';
    return (
      <ScrollView >
        <View style={styles.dateDiv}>
          <Image style={styles.dateIcon} source={require('./assets/calendar.png')} />
          <Text style={styles.dateText} fontSize={18}>{date}</Text>
        </View>
        <Image source={pic} style={styles.purchaseImage} />
        <View style={styles.itemsDiv}>
          <Text style={styles.itemsDivTitle} >品項：</Text>
          <View>
            {items.map((item) => <GoodItem item={item} navigation={this.props.navigation} />)}
          </View>
        </View>

      </ScrollView>
    )
  }

}
