import { View, Text, StyleSheet } from 'react-native';

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuda</Text>
      <Text>Estamos aqui para te ajudar!</Text>
      <Text>FAQ e suporte em breve.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});