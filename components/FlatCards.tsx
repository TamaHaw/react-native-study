import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Flat Cards </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Redd</Text>
                </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EA7D7D',
    },
    cardTwo: {
        backgroundColor: '#ABCDDE',
    },
    cardThree: {
        backgroundColor: '#FFE2A6',
    }
})