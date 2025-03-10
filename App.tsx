import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Function to generate a random hex color
const getRandomColor = (excludeColor: string) => {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  } while (color.toUpperCase() === excludeColor.toUpperCase()); // Ensure it’s not the same as the excluded color
  return color;
};

function App(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [triangleColor, setTriangleColor] = useState(getRandomColor("#FFFFFF"));
  const [squareColor, setSquareColor] = useState(getRandomColor("#FFFFFF"));
  const [circleColor, setCircleColor] = useState(getRandomColor("#FFFFFF"));
  const [starColor, setStarColor] = useState(getRandomColor("#FFFFFF"));
  const [hexagonColor, setHexagonColor] = useState(getRandomColor("#FFFFFF"));

  const generateColors = () => {
    const newBackgroundColor = getRandomColor(backgroundColor); // Get new background color
    setBackgroundColor(newBackgroundColor);
    
    // Generate new colors ensuring they are not the same as the background
    setTriangleColor(getRandomColor(newBackgroundColor));
    setSquareColor(getRandomColor(newBackgroundColor));
    setCircleColor(getRandomColor(newBackgroundColor));
    setStarColor(getRandomColor(newBackgroundColor));
    setHexagonColor(getRandomColor(newBackgroundColor));
  };

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.container, { backgroundColor }]}>

        {/* Triangle */}
        <View style={[styles.triangle, { borderBottomColor: triangleColor }]} />

        {/* Square */}
        <View style={[styles.square, { backgroundColor: squareColor }]} />

        {/* Circle */}
        <View style={[styles.circle, { backgroundColor: circleColor }]} />

        {/* Hexagon */}
        <View style={[styles.hexagonContainer]}>
          <View style={[styles.hexagon, { backgroundColor: hexagonColor }]} />
          <View style={[styles.hexagonBefore, { borderBottomColor: hexagonColor }]} />
          <View style={[styles.hexagonAfter, { borderTopColor: hexagonColor }]} />
        </View>

        {/* Button */}
        <TouchableOpacity onPress={generateColors}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Click me</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  actionBtnText: {
    color: "#FFFFFF",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    top: '10%',
    left: '25%'
  },
  square: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: '5%',
    top: '70%',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    right: '5%',
    top: '30%',
  },
  hexagonContainer: {
    position: 'absolute',
    right: '20%',
    bottom: '15%',
    alignItems: 'center',
  },
  hexagon: {
    width: 60,
    height: 34,
    backgroundColor: 'red',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -17,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -17,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 17,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export default App;
