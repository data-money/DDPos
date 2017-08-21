import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Container,
  Content,
  View,
  Item,
  Text,
  Icon,
  Button,
} from 'native-base';

import { Image } from 'react-native';

import GoodItem from './components/GoodItem';
const { width, height } = Dimensions.get('window');


export default class OrderItem extends Component {


  render() {

    const data = {
      receiver: 'Receiver Name',
      date: '2017-08-21',
      imagePath: '',
      items: [
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
      ],
    }


    return (
      <Container >
        <Content padder>
          <View style={{ alignItems: 'center', marginBottom: 16, }}>
            <Image source={require('./assets/noPic.png')} style={{ width: width-16, height: width-16, }} />
          </View>
          <Item>
            <Image source={require('./assets/user.png')} style={{ width: 38, height: 38, marginRight: 8, }} />
            <Text> Receiver Name </Text>
          </Item>
          <View style={{ height: 16, }} />
          <Item>
            <Image source={require('./assets/date.png')} style={{ width: 38, height: 38, marginRight: 8, }} />
            <Text> 2017-08-21 </Text>
          </Item>
          <View style={{ height: 16, }} />
          <Text style={{ fontSize: 24, fontWeight: 'bold'}}>品項：</Text>
          <View>
            {data.items.map((item) => <GoodItem item={item} navigation={this.props.navigation} />)}
          </View>
        </Content>
      </Container>
    )
  }

}
