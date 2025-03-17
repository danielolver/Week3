import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import colours from '../constants/colour'; 


export default function TButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    padding: 15,
    borderRadius: 10,
    width: 130,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: colours.text,
    fontWeight: "bold",
  },
});
