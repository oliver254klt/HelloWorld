import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainCard from './MainCard';

const nombre = 'Oliver';
const apellido = 'Brown';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World by {nombre} {apellido}</Text>
      <MainCard loading={isLoading} />
      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        onPress={() => setIsLoading(!isLoading)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
