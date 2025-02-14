import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Trending Places </Text>
        <ScrollView horizontal={true}>
            <View style={[styles.card, styles. cardElevated]}>
                <Image 
                source={{
                    uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/bb/big-ben.jpg?w=1200&h=1200&s=1&pcx=1033&pcy=310&pchk=v1_bf93e1170e1f1f8d4cea'
                }}
                style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Big Bang</Text>
                    <Text style={styles.cardLabel}>London, England</Text>
                    <Text style={styles.cardDescription}>An exciting and dynamic destination, often associated with the city’s rich history, vibrant culture, and cutting-edge innovation.</Text>
                    <Text style={styles.cardFooter}>5 mins away</Text>
                </View>
            </View>
            <View style={[styles.card, styles. cardElevated]}>
                <Image 
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoitUph01xAGU54-gqNJirg7CPLE3VXhoLPw&s'
                }}
                style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Stonehenge</Text>
                    <Text style={styles.cardLabel}>Wiltshire, England</Text>
                    <Text style={styles.cardDescription}>One of the most famous prehistoric monuments in the world. It consists of massive standing stones arranged in a circular formation.</Text>
                    <Text style={styles.cardFooter}>5 mins away</Text>
                </View>
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
    card: {
        width: 300,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 8
    },
    cardDescription: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 16,
        marginTop: 8,
        flexShrink: 1
    },
    cardFooter: {
        color: '#0555AA',
        fontSize: 10,
    },
})