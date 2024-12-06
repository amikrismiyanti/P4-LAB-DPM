import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ScoreCard = ({ teamName, score, increment, decrement }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#334155",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 10,
    width: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default ScoreCard;
