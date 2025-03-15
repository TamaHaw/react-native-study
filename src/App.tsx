import React, { useState, useEffect, useCallback, JSX } from 'react';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [winMessage, setWinMessage] = useState<string>('');
  const [gameState, setGameState] = useState<string[]>(new Array(9).fill('empty'));

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    setGameState(new Array(9).fill('empty'));
  };

  const checkIsWinner = useCallback(() => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Baris
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Kolom
      [0, 4, 8], [2, 4, 6]             // Diagonal
    ];

    for (const [a, b, c] of winningCombinations) {
      if (gameState[a] !== 'empty' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        setWinMessage(`${gameState[a]} wins`);
        return;
      }
    }

    if (!gameState.includes('empty')) {
      setWinMessage('Draw');
    }
  }, [gameState]);

  useEffect(() => {
    checkIsWinner();
  }, [gameState, checkIsWinner]);

  const onChangeItem = useCallback((itemNumber: number) => {
    if (winMessage) {
      Snackbar.show({ text: winMessage, backgroundColor: '#000000', textColor: '#FFFFFF' });
      return;
    }

    if (gameState[itemNumber] === 'empty') {
      const newGameState = [...gameState];
      newGameState[itemNumber] = isCross ? 'cross' : 'circle';
      setGameState(newGameState);
      setIsCross(!isCross);
    } else {
      Snackbar.show({ text: 'This already filled', backgroundColor: 'red', textColor: '#FFFFFF' });
    }
  }, [gameState, isCross, winMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.background}>
        {winMessage ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerText}>{winMessage}</Text>
          </View>
        ) : (
          <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
            <Text style={styles.gameTurn}>Player {isCross ? 'Cross' : 'Circle'} turn</Text>
          </View>
        )}

        <FlatList 
          style={{ alignSelf: 'center' }}
          numColumns={3} 
          data={gameState} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Pressable style={styles.card} onPress={() => onChangeItem(index)}>
              <Icons name={item} />
            </Pressable>
          )}
        />
        
        <Pressable style={styles.gameBtn} onPress={reloadGame}>
          <Text style={styles.gameBtnText}>{winMessage ? 'Start new game' : 'Start Again'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#444444',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  gameTurn: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  playerX: {
    backgroundColor: '#5AAB77',
  },
  playerO: {
    backgroundColor: '#D94DAA',
  },
  card: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    margin: 8,
    backgroundColor: '#222222',
    elevation: 5,
  },
  winnerInfo: {
    backgroundColor: '#3DBF77',
    padding: 12,
  },
  winnerText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#3D3DAF',
  },
  gameBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
