import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Elevated Cards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>More...</Text>
            </View>
        </ScrollView>
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
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#E1CFCA',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
