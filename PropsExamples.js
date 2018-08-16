import React, { Component } from 'react'
import { Text, View } from 'react-native';


class PropsExample extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { name } = this.props
        return(

            <View>
                <Text>
                    Hello { name }
                </Text>
            </View>
        )
    }
}

export default PropsExample