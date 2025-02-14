import React, { Component } from 'react'
import { Text, StyleSheet, View, Linking, Image, TouchableOpacity } from 'react-native'
import ElevatedCards from './ElevatedCards'

export default class ActionCards extends Component {
  render() {
        function openWebsite(websiteLink: string) {
            Linking.openURL(websiteLink)
        }
    return (
      <View>
        <Text style={styles.headingText}> Blog Card </Text>
        <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in Javascript 21 - ES12
                </Text>
            </View>
            <Image
            source={{uri: 'https://tse1.mm.bing.net/th?id=OIP.uZ094Kxwv_qLih3tn9AZ6QHaEK&pid=Api&P=0&h=180'}}
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    ES12 is the latest version of Javascript. It includes a lot of new features and improvements
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={() => openWebsite('https://www.javascript.com')}
                >
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => openWebsite('https://www.instagram.com/wp.roject/')}
                >
                    <Text style={styles.socialLinks}>Follow Us</Text>
                </TouchableOpacity>
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
    card: {
        width: 360,
        height: 320,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#FDA456',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 160,
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
})
