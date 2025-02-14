import React from "react";
import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={[styles.safeArea, isDarkMode ? styles.darkBg : styles.lightBg]}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.lightText : styles.darkText}>
                    Hello World
                </Text>
                <View style={{ height: 20 }} />
                <Text style={isDarkMode ? styles.lightText : styles.darkText}>
                    This App can detect if your device is in dark mode or light mode.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lightBg: { backgroundColor: "lightblue" },
    darkBg: { backgroundColor: "black" },
    lightText: { color: "#FFFFFF", textAlign: "center" },
    darkText: { color: "#000000", textAlign: "center" }
});

export default AppPro;
