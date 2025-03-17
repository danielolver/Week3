import { View, StyleSheet } from 'react-native';
import React from 'react';
import Board from '../components/Board';
import TButton from '../components/TButton';
import Title from '../components/Title';
import colours from '../constants/colour';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text="Tic Tac Toe" />
      </View>

      <Board />

      <View style={styles.buttonContainer}>
        <TButton title="Rules" onPress={() => navigation.navigate("Rules")} />
        <TButton title="Credits" onPress={() => navigation.navigate("Credits")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 20, 
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
});
