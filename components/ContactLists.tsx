import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

export default class ContactLists extends Component {
  render() {
        const contacts = [
            {
                uid: 1,
                name: 'Jane Smith',
                status: 'Passionate about technology',
                imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
            },
            {
                uid: 2,
                name: 'John Doe',
                status: 'Lifelong learner and coder',
                imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            },
            {
                uid: 3,
                name: 'Hitesh Choudhary',
                status: 'Just an extra ordinary teacher',
                imageUrl: 'https://avatars.githubusercontent.com/u/7687859?v=4',
            },                
            {
                uid: 4,
                name: 'Michael Johnson',
                status: 'Building the future with code',
                imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
            },
            {
                uid: 5,
                name: 'Emily Davis',
                status: 'Designing intuitive user experiences',
                imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
            },
            {
                uid: 6,
                name: 'Chris Wilson',
                status: 'Solving problems with JavaScript',
                imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
            },
        ];
    return (
      <View>
        <Text style={styles.headingText}> Contact List </Text>
        <ScrollView
        style={styles.container}
        scrollEnabled={false}
        >
            {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
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
        paddingHorizontal: 16,
        marginTop: 8
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        backgroundColor: '#ABCDDE',
        padding: 8,
        borderRadius: 12,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    userStatus: {
        fontSize: 12,
        color: '#666',
    },
})

