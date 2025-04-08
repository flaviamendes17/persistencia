import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import Botao from "../components/Botao";

export default function HomeScreen({ navigation }) {
  const [texto, setTexto] = useState("");
  const [textoPersistido, setTextoPersistido] = useState("");
  const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] = useState("");

  useEffect(() => {
    SecureStore.getItemAsync("meuTexto").then(setTextoPersistido);
  }, []);

  const salvarTexto = async () => {
    if (texto.trim()) {
      await SecureStore.setItemAsync("meuTexto", texto);
      setTextoPersistido(texto);
      setTextoSalvoSemPersistencia(texto);
      setTexto("");
    } else {
      alert("Por favor, insira algo.");
    }
  };

  const limparTexto = async () => {
    await SecureStore.deleteItemAsync("meuTexto");
    setTextoPersistido("");
    setTextoSalvoSemPersistencia("");
    alert("Texto apagado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Persistência e Navegação</Text>
      <TextInput
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
        style={styles.input}
      />
      <Text style={styles.vermelho}>
        Sem persistência: {textoSalvoSemPersistencia || "Nenhum texto salvo"}
      </Text>
      <Text style={styles.verde}>
        Texto persistido: {textoPersistido || "Nenhum texto salvo"}
      </Text>
      <Botao titulo="Salvar" onPress={salvarTexto} />
      <Botao titulo="Limpar" onPress={limparTexto} />
      <Botao
        titulo="Detalhes"
        onPress={() =>
          navigation.navigate("Detalhes", {
            textoNaoPersistido: textoSalvoSemPersistencia,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  vermelho: {
    color: "red",
    marginBottom: 5,
  },
  verde: {
    color: "green",
    marginBottom: 10,
  },
});
