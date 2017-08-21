import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
} from 'native-base';

import { Image } from 'react-native';

export default class ItemList extends Component {

  render() {

    return (
      <View style={{ flexDirection: 'row', marginLeft: 8, marginRight: 8, }}>
        <View style={{ justifyContent: 'center', }}>
          <Image source={require('./assets/noPic.png')} style={{ width: 60, height: 60, marginRight: 8,  }} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', }}>Receiver Name</Text>
          <Text style={{marginRight: 8, }}>藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500</Text>
          <Text>2017-08-08</Text>
        </View>
      </View>
    );
  }

}
