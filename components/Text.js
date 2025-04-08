import { Text } from "react-native";

export default function TextoExibido({ titulo, texto }) {
  return (
    <Text>
      {titulo}: {texto}
    </Text>
  );
}