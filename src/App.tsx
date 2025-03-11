import React, { JSX, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// Constants
import { currencyByRupiah } from './constants';
// Component
import CurrencyButton from './components/CurrencyButton';
// Snackbar
import Snackbar from 'react-native-snackbar';

// Define the Currency type
type Currency = {
  name: string;
  value: number;
  flag: string;
  symbol: string;
};

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressHandler = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Masukkan nilai uang',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#EA2027',
        textColor: '#FFFFFF',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} ${targetValue.name}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      Snackbar.show({
        text: 'Masukkan nilai uang yang valid',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#EA2027',
        textColor: '#FFFFFF',
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        <View style={styles.rupiahContainer}>
          <Text style={styles.rupiah}>Rp</Text>
          <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode="while-editing" // Only works on iOS
            onChangeText={setInputValue}
            keyboardType="number-pad"
            placeholder="Masukkan nilai uang"
            style={styles.input}
          />
        </View>
        {resultValue ? <Text style={styles.result}>{resultValue}</Text> : null}
      </View>
      <View style={styles.bottomContainer}>
      <FlatList
  numColumns={3}
  data={currencyByRupiah}
  keyExtractor={(item) => item.name}
  contentContainerStyle={styles.flatListContainer}
  renderItem={({ item }) => (
    <Pressable
      style={[
        styles.button,
        targetCurrency === item.name && styles.selectedButton
      ]}
      onPress={() => buttonPressHandler(item)}
    >
      <CurrencyButton name={item.name} flag={item.flag} />
    </Pressable>
  )}
  ListEmptyComponent={<Text style={styles.emptyText}>Tidak ada data</Text>}
/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rupiahContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  rupiah: {
    fontSize: 28,
    color: '#2D3436',
    marginRight: 10,
  },
  input: {
    fontSize: 24,
    color: '#2D3436',
    flex: 1,
  },
  result: {
    fontSize: 20,
    color: '#2D3436',
    marginTop: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  flatListContainer: {
    alignItems: 'center', // Pastikan tombol berada di tengah
    justifyContent: 'center',
  },
  button: {
    width: 100, // Ukuran tombol yang lebih konsisten
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f1c40f',
  },
  selectedButton: {
    backgroundColor: '#2ecc71',
  },
});

export default App;
