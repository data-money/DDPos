import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Dimensions from 'Dimensions';

import PurchaseItem from './components/PurchaseItem';
import OrderItem from './components/OrderItem';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  itemPic: {
    width: width-16,
    height: width-16,
    margin: 8,

  },

  iconLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconImage: {
    width: 30,
    height: 30,
    margin: 8,

  },

  iconText: {
    fontSize: 18,
    color: 'black',
  },

  lastText: {
    color: 'gray',
    fontSize: 14,
  },

  stockText: {
    color: 'black',
    fontSize: 18,
    marginRight: 8,
  },

  unitText: {
    color: 'gray',
    fontSize: 16,
  },

  titleText: {
    color: 'gray',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    marginTop: 16,
    marginBottom: 16,
  },

  unitText: {
    fontSize: 18,
    color: 'black',

  },

  area: {
    marginRight: 8,
    marginLeft: 8,
  }

});

export default class ItemDetail extends Component {



  render() {

    let data = {
      name: '藍色大珠',
      stock: 100,
      purchaseUnit: '包',
      orderUnit: '顆',
      transform: 100,
      purchases: [
        { date: '2017-08-08' },
        { date: '2017-08-08' },
        { date: '2017-08-08' },
        { date: '2017-08-08' },
        { date: '2017-08-08' },
      ],
      orders: [
        {receiver: '黃小娟', date: '2017-08-11'},
        {receiver: '黃小娟', date: '2017-08-11'},
        {receiver: '黃小娟', date: '2017-08-11'},
        {receiver: '黃小娟', date: '2017-08-11'},
        {receiver: '黃小娟', date: '2017-08-11'},
      ],
    }

    return (
      <ScrollView style={styles.container}>
        <Image source={require('./assets/noPic.png')} style={styles.itemPic} />
        <View style={styles.iconLine}>
          <Image style={styles.iconImage} source={require('./assets/box.png')} />
          <Text style={styles.iconText}> {data.name}</Text>
        </View>
        <View style={[styles.iconLine]}>
          <Image style={styles.iconImage} source={require('./assets/stock.png')} />
          <Text style={styles.lastText}>庫存剩下：</Text>
          <Text style={styles.stockText}>{data.stock}</Text>
          <Text style={styles.unitText}>{data.purchaseUnit}</Text>
        </View>
        <View style={styles.iconLine}>
          <Image style={styles.iconImage} source={require('./assets/left.png')} />
          <Text>進貨單位：</Text>
          <Text style={styles.unitText}>{data.purchaseUnit}</Text>
        </View>
        <View style={styles.iconLine}>
          <Image style={styles.iconImage} source={require('./assets/right.png')} />
          <Text>進貨單位：</Text>
          <Text style={styles.unitText}>{data.orderUnit}</Text>
        </View>
        <View style={styles.iconLine}>
          <Image style={styles.iconImage} source={require('./assets/right.png')} />
          <Text>轉換率：</Text>
          <Text style={styles.unitText}>{data.transform}</Text>
          <Text>(1{data.purchaseUnit} = {1*data.transform}{data.orderUnit})</Text>
        </View>

        <Text style={styles.titleText}>進貨紀錄</Text>
        <View style={styles.area}>
          {data.purchases.map(item => <PurchaseItem item={item} />)}
        </View>

        <Text style={styles.titleText}>送貨紀錄</Text>
        <View style={styles.area}>
          {data.orders.map(item => <OrderItem item={item} />)}
        </View>

      </ScrollView>
    );
  }

}
