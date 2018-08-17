import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

// import PropsExamples from './PropsExamples'
import Counter from './Counter'



class App extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)

    this.state = {
      msg: 'first page',
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     msg: 'Counter'
  //   })
  // }

  render() {
    let { navigate } = this.props.navigation
    const { msg } = this.state
    return (
      <View style={styles.container}>
        <Button title = 'Counter' onPress = { () => navigate('Counter')}></Button>
        <Text>{ msg }</Text>
      </View>
    );
  }
}

const StackApp = StackNavigator({
  Home: { screen: App },
  Counter: { screen: Counter }
})

// export default App
export default StackApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
