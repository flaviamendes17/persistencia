import { Text } from "react-native";

// Componente que recebe um texto como prop e exibe na tela
// Props esperadas: titulo, texto
// Props é um objeto que contém informações passadas de um componente pai para um componente filho
// Props são somente leitura e não podem ser alteradas
export default function TextoExibido({ titulo, texto }) {
  return (
    <Text>
      {titulo}: {texto}
    </Text>
  );
}