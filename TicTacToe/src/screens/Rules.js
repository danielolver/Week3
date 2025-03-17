import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function Rules({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text="Game Rules" />
      <Text style={styles.text}>1. Players take turns placing 'X' or 'O'.</Text>
      <Text style={styles.text}>2. The first to align 3 in a row wins.</Text>
      <Text style={styles.text}>3. If no one wins, it's a draw.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});
