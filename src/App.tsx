import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { Text, StyleSheet, View, ImageSourcePropType, Image, Pressable } from 'react-native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Mengimpor gambar dadu
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

// Mendefinisikan tipe props untuk komponen Dice
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

// Opsi untuk haptic feedback
const options = {
  enableVibrateFallback: true, // Mengaktifkan fallback getaran jika haptic tidak tersedia
  ignoreAndroidSystemSettings: false, // Menggunakan pengaturan sistem Android
};

// Komponen untuk menampilkan gambar dadu
const Dice = ({ imageUrl }: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
  // State untuk menyimpan gambar dadu yang sedang ditampilkan
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  // Fungsi untuk me-roll dadu ketika tombol ditekan
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1; // Menghasilkan angka acak antara 1-6

    // Mengubah gambar dadu berdasarkan angka acak
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }

    // Memberikan efek haptic feedback saat tombol ditekan
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      {/* Menampilkan gambar dadu */}
      <Dice imageUrl={diceImage} />

      {/* Tombol untuk me-roll dadu */}
      <Pressable 
        style={({ pressed }) => [
          styles.rollDiceBtn,
          { backgroundColor: pressed ? "#2C3E50" : "#395886" } // Mengubah warna tombol saat ditekan
        ]}
        onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200, // Lebar gambar dadu
    height: 200, // Tinggi gambar dadu
    borderRadius: 12 // Membuat sudut gambar lebih halus
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Memposisikan konten ke tengah secara vertikal
    alignItems: 'center', // Memposisikan konten ke tengah secara horizontal
    backgroundColor: '#628ECB' // Warna latar belakang layar
  },
  rollDiceBtn: {
    marginTop: 30, // Jarak antara dadu dan tombol
    padding: 10, // Ruang di dalam tombol
    backgroundColor: '#395886', // Warna tombol saat tidak ditekan
    borderRadius: 8 // Membuat sudut tombol lebih halus
  },
  rollDiceBtnText: {
    color: 'white', // Warna teks tombol
    fontSize: 14, // Ukuran teks tombol
  }
})

export default App;