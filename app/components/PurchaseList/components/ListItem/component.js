import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFCCEE',
  },

  iconImage: {
    width: 50,
    margin: 8,
  },

  rightWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  date: {

  }

});

export default class ListItem extends Component {

  constructor(props){
    super(props);
    this.touchAction = this.touchAction.bind(this);
  }

  touchAction() {
    const { navigate } = this.props.navigation;
    if (navigate) {
      navigate('Single', {pid: this.props.item.pid});

    } else {
      Alert.alert('not found navigate');
    }
  }

  render() {
    let title = this.props.item == null ? 'not found data' : this.props.item.scribe;
    let date = this.props.item == null ? 'not found date' : this.props.item.date;

    return (
      <TouchableNativeFeedback onPress={this.touchAction}>
      <View style={styles.container} >
        <Image style={styles.iconImage} source={require('./assets/cancel.png')} />
        <View style={styles.rightWrap}>
          <Text style={styles.title} numberOfLines={1} >{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      </TouchableNativeFeedback>
    )
  }
}
