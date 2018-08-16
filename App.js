import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropsExamples from './PropsExamples'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'Hello World',
      msg1: 'Top'
    }
  }

  componentDidMount() {
    this.setState({
      msg: 'Hello José!'
    })
  }

  render() {
    const { msg, msg1 } = this.state
    return (
      <View style={styles.container}>
        <Text>{ msg }</Text>
        <PropsExamples name = 'jose'></PropsExamples>
        <Text>{ msg1 }</Text>
      </View>
    );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
