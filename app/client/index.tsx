import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { canchas } from '../../data/mockData';

export default function Explorar() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Canchas cerca de ti</Text>
          <Text style={styles.subtitle}>Bogotá · 8 disponibles ahora</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar cancha o sector..."
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.filtersContainer}>
          <TouchableOpacity style={styles.filterChipActive}>
            <Text style={styles.filterTextActive}>Fútbol 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Fútbol 11</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Disponible hoy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.canchasContainer}>
          {canchas.map((cancha) => (
            <TouchableOpacity
              key={cancha.id}
              style={[
                styles.canchaCard,
                { backgroundColor: cancha.fotos[0] }
              ]}
              onPress={() => router.push(`/client/detalle?id=${cancha.id}`)}
            >
              <View style={styles.canchaOverlay}>
                <View style={styles.canchaHeader}>
                  <Ionicons name="football" size={20} color="white" />
                  <Text style={styles.canchaLabel}>Cancha sintética</Text>
                </View>
                <View style={styles.canchaStatus}>
                  {cancha.disponible ? (
                    <>
                      <Ionicons name="checkmark-circle" size={16} color="white" />
                      <Text style={styles.canchaStatusText}>Disponible</Text>
                    </>
                  ) : (
                    <>
                      <Ionicons name="close-circle" size={16} color="white" />
                      <Text style={styles.canchaStatusText}>Llena</Text>
                    </>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterChipActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  filterTextActive: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  canchasContainer: {
    padding: 20,
    gap: 12,
  },
  canchaCard: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
  },
  canchaOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 16,
    justifyContent: 'space-between',
  },
  canchaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  canchaLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  canchaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  canchaStatusText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
