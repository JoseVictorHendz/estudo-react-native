import React, { Component } from 'react'
import { Alert, Button, Text, View } from 'react-native';


class Counter extends Component {
    static navigationOptions = {
        title: 'Counter'
      }
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.descEvent = this.descEvent.bind(this)
        this.incEvent = this.incEvent.bind(this)
    }

    incEvent() {
        const { counter } = this.state
        if(counter != 10) {
            this.setState({
                counter: this.state.counter + 1
            })
        } else {
          Alert.alert('The value dont can be bigger then ten ')  
        }


    }

    descEvent() {
        const { counter } = this.state
        if(counter != 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        } else {
            Alert.alert('The value dont can be negative')
        }


    }

    render() {
        let { counter } = this.state
        return(
            <View>
                <Button title = "Desc" onPress = {() => this.descEvent()}/>
                <Text>{counter}</Text>
                <Button title = "Inc" onPress = {() => this.incEvent()}/>
            </View>
        )
    }
}

export default Counter