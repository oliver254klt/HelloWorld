import { StyleSheet, Text, View } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8f0fe',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
