import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import colours from '../constants/colour';

export default function Board() {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.board}>
        {Array(9).fill(null).map((_, index) => (
          <TouchableOpacity key={index} style={styles.cell}>
            <Text style={styles.cellText}></Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer: {
    backgroundColor: colours.board,
    width: 350,
    height: 350,
    padding: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colours.board,
    backgroundColor: colours.cell,
    borderRadius: 10,
  },
  cellText: {
    fontSize: 36,
    color: colours.text,
    fontWeight: "bold",
  },
});
