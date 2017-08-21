import React, { Component } from 'react';
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  }
})

export default class PurchaseList extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }


  render() {
    console.log('hello');
    return (
      <ScrollView style={styles.container} >
        <FlatList
          data={this.props.list }
          renderItem={({item}) => <ListItem item={item} navigation={this.props.navigation} />}
        />
        <View style={{height: 1000, }} />
      </ScrollView>
    );
  }

}
