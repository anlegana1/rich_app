import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CanchasApp</Text>
      <Text style={styles.subtitle}>Alquiler de canchas sintéticas</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.ownerButton]}
          onPress={() => router.push('/owner')}
        >
          <Text style={styles.buttonText}>👔 Soy Dueño</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.clientButton]}
          onPress={() => router.push('/client')}
        >
          <Text style={styles.buttonText}>⚽ Soy Cliente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 20,
  },
  button: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  ownerButton: {
    backgroundColor: Colors.primary,
  },
  clientButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
