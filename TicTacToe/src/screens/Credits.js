import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function Credits({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text="Credits" />
      <Text style={styles.text}>Developed by Daniel Olver</Text>
      <Text style={styles.text}>Powered by React Native</Text>
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
