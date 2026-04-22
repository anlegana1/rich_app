import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function Reservas() {
  const misReservas = [
    {
      id: '1',
      cancha: 'Canchas del Norte',
      fecha: 'Miércoles 22 abril',
      hora: '11:00-12:00',
      precio: 80000,
      estado: 'Confirmada'
    },
    {
      id: '2',
      cancha: 'Cancha sintética',
      fecha: 'Jueves 23 abril',
      hora: '15:00-16:00',
      precio: 70000,
      estado: 'Pendiente'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Reservas</Text>
      </View>

      <ScrollView style={styles.content}>
        {misReservas.map((reserva) => (
          <View key={reserva.id} style={styles.reservaCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: Colors.lightGreen }]}>
                <Ionicons name="football" size={24} color={Colors.primary} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.canchaName}>{reserva.cancha}</Text>
                <Text style={styles.fechaText}>{reserva.fecha}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                reserva.estado === 'Confirmada' ? styles.statusConfirmada : styles.statusPendiente
              ]}>
                <Text style={[
                  styles.statusText,
                  reserva.estado === 'Confirmada' ? styles.statusTextConfirmada : styles.statusTextPendiente
                ]}>
                  {reserva.estado}
                </Text>
              </View>
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={20} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{reserva.hora}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="cash-outline" size={20} color={Colors.textSecondary} />
                <Text style={styles.detailText}>${reserva.precio.toLocaleString()}</Text>
              </View>
            </View>

            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="location-outline" size={20} color={Colors.primary} />
                <Text style={styles.actionText}>Ver ubicación</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubbles-outline" size={20} color={Colors.primary} />
                <Text style={styles.actionText}>Contactar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  reservaCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  canchaName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  fechaText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusConfirmada: {
    backgroundColor: Colors.lightGreen,
  },
  statusPendiente: {
    backgroundColor: Colors.lightOrange,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusTextConfirmada: {
    color: Colors.primary,
  },
  statusTextPendiente: {
    color: Colors.warning,
  },
  cardDetails: {
    gap: 8,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 15,
    color: Colors.text,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
});
