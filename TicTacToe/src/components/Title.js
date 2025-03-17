import { Text, StyleSheet } from 'react-native';
import React from 'react';
import colours from '../constants/colour';

export default function Title({ text }) {
  return <Text style={styles.header}>{text}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: colours.header,
    marginBottom: 20,
  },
});
