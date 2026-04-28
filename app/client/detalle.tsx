import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { canchas } from '../../data/mockData';
import MapView from '../../components/MapView';

export default function DetalleCancha() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const cancha = canchas.find(c => c.id === id) || canchas[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.imageContainer, { backgroundColor: cancha.fotos[0] }]}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerBar}>
          <View style={styles.headerInfo}>
            <Text style={styles.canchaName}>{cancha.nombre}</Text>
            <Text style={styles.canchaType}>{cancha.tipo} · {cancha.direccion}</Text>
          </View>
          <View style={styles.priceTag}>
            <Text style={styles.price}>${(cancha.precio / 1000).toFixed(0)},000/hr</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Dimensiones</Text>
              <Text style={styles.infoValue}>{cancha.dimensiones}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tipo</Text>
              <Text style={styles.infoValue}>{cancha.tipo}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Dirección</Text>
              <Text style={styles.infoValue}>{cancha.direccion}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Teléfono</Text>
              <Text style={styles.infoValue}>{cancha.telefono}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenidades</Text>
          <View style={styles.amenidadesGrid}>
            {cancha.amenidades.map((amenidad, index) => (
              <View key={index} style={styles.amenidadItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.primary} />
                <Text style={styles.amenidadText}>{amenidad}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.locationHeader}>
            <Ionicons name="location" size={24} color={Colors.primary} />
            <View style={styles.locationInfo}>
              <Text style={styles.sectionTitle}>Ubicación</Text>
              <Text style={styles.addressText}>{cancha.direccion}</Text>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <MapView address={cancha.direccion} style={styles.map} />
          </View>
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => router.push(`/client/reservar?id=${cancha.id}`)}
        >
          <Text style={styles.reserveButtonText}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => router.push('/client/chat')}
        >
          <Ionicons name="chatbubbles" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    height: 250,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBar: {
    backgroundColor: Colors.primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
  },
  canchaName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  canchaType: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  priceTag: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 1,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  amenidadesGrid: {
    gap: 12,
  },
  amenidadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amenidadText: {
    fontSize: 16,
    color: Colors.text,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 16,
  },
  locationInfo: {
    flex: 1,
  },
  addressText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  mapContainer: {
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  map: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  reserveButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  chatButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
