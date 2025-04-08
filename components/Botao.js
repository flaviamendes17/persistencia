import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "blue",
    padding: 12,
    marginVertical: 5,
    borderRadius: 6,
    alignItems: "center",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
});
