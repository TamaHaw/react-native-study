import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  Button,
  Alert,
  Pressable
} from "react-native";

function App() {
  return (
    <SafeAreaView style={{backgroundColor: "lightblue", flex: 1}}>
      <View style={{
        paddingVertical: 10,
        paddingHorizontal: 20
      }}>  
        <Text>Hello World</Text>
        <View style={{ height: 20 }} />
        <Pressable 
          style={{
            padding: 10,
            backgroundColor: "khaki",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "dashed",}}
          onPress={() => Alert.alert("Pressable pressed")}>
          <Text style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 14,
          }}>Press Me</Text>
        </Pressable>
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: 150}}>
            <Pressable
              style={({ pressed }) => ({
                padding: 10,
                backgroundColor: pressed ? "orange" : "khaki",
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "red",
                borderStyle: "dashed",
              })}
              onPress={() => Alert.alert("Pressable pressed")}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Press Me
              </Text>
            </Pressable>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "lightgreen",
                paddingVertical: 5,
                paddingHorizontal: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "darkgreen",
                borderStyle: "solid",}}
              onPress={() => Alert.alert("Pressable pressed")}>
              <Text style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14,
              }}>Press Me</Text>
            </Pressable>
          </View>
        </View>        
        <View style={{ height: 10 }} />
        <Button title="Press me" onPress={() => Alert.alert("Button pressed")} />
      </View>
    </SafeAreaView>
  );
}

export default App; 