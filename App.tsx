import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactLists from './components/ContactLists'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ContactLists />
          <ActionCards />          
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App
