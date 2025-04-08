import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function DetalhesScreen({ route }) {
  const { textoNaoPersistido } = route.params;
  const [textoPersistido, setTextoPersistido] = useState("");

  useEffect(() => {
    SecureStore.getItemAsync("meuTexto").then(setTextoPersistido);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes</Text>
      <Text style={styles.vermelho}>
        Sem persistência: {textoNaoPersistido || "Nenhum texto salvo"}
      </Text>
      <Text style={styles.verde}>
        Persistência: {textoPersistido || "Nenhum texto salvo"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  vermelho: {
    color: "red",
    marginBottom: 10,
  },
  verde: {
    color: "green",
  },
});
