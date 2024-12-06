import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import ScoreCard from "./components/ScoreCard";

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState("");
  const [showModal, setShowModal] = useState(false);

  const incrementScore = (team) => {
    if (winner) return;

    if (team === "A") {
      const newScoreA = scoreA + 1;
      setScoreA(newScoreA);
      if (newScoreA === 10) {
        setWinner("Tim A");
        setShowModal(true);
      }
    } else {
      const newScoreB = scoreB + 1;
      setScoreB(newScoreB);
      if (newScoreB === 10) {
        setWinner("Tim B");
        setShowModal(true);
      }
    }
  };

  const decrementScore = (team) => {
    if (team === "A" && scoreA > 0) setScoreA(scoreA - 1);
    if (team === "B" && scoreB > 0) setScoreB(scoreB - 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner("");
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Skor Pertandingan Futsal 🏆</Text>

      {!winner && (
        <Text style={styles.infoText}>Pertandingan berlangsung...</Text>
      )}

      <ScoreCard
        teamName="Tim A"
        score={scoreA}
        increment={() => incrementScore("A")}
        decrement={() => decrementScore("A")}
      />

      <ScoreCard
        teamName="Tim B"
        score={scoreB}
        increment={() => incrementScore("B")}
        decrement={() => decrementScore("B")}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>

      {/* Modal untuk menampilkan pesan kemenangan */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🎉 Selamat!</Text>
            <Text style={styles.modalText}>{winner} Menang!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={resetScores}>
              <Text style={styles.closeButtonText}>Mulai Ulang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: 20,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#cbd5e1",
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  resetButtonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    width: "80%",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    color: "#374151",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
