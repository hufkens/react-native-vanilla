import React from 'react'
import { Text, View } from 'react-native'

class App extends React.Component {
  render () {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7777FF'}}>
      <Text>{'Hello from React Native Vanilla 0.3.1!'}</Text>
    </View>
  }
}

export default App
