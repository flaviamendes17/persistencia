import { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import * as SecureStore from "expo-secure-store";

import Botao from "../components/Botao";

export default function HomeScreen({ navigation }) {
  const [texto, setTexto] = useState("");
  const [textoPersistido, setTextoPersistido] = useState("");
  const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] =
    useState("");


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
    <View>
      <Text>Persistência e Navegação</Text>
      <TextInput
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />
      <Text>Sem persistência: {textoSalvoSemPersistencia}</Text>
      <Text>Texto persistido: {textoPersistido}</Text>
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