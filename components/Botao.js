import { TouchableOpacity, Text } from "react-native";

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}