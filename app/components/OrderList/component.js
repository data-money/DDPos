import React, { Component } from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import {
  Container,
  Content,
  View,
} from 'native-base';

import ItemList from './components/ItemList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    backgroundColor: 'skyblue',
  }
})

export default class PurchaseList extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    const list = [
      {
        pid: 0,
        scribe: '藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500',
        date: '2017-08-08',
      },
      {
        pid: 0,
        scribe: '藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500',
        date: '2017-08-08',
      },
      {
        pid: 0,
        scribe: '藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500',
        date: '2017-08-08',
      },
      {
        pid: 0,
        scribe: '藍珠x8、白珠x10、紅珠x30、大珠x100、小珠x500',
        date: '2017-08-08',
      },
    ];

    return (
      <Container>
        <ScrollView style={styles.container} >
          <FlatList
            data={list}
            renderItem={({item}) => <ItemList item={item} navigation={this.props.navigation} />}
          />
        </ScrollView>
      </Container>
    );
  }

}
