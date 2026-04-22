import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import { reservasHoy, canchas } from '../../data/mockData';

export default function OwnerDashboard() {
  const cancha = canchas[0];
  const totalIngresos = reservasHoy.reduce((sum, r) => sum + r.precio, 0);
  const reservasPendientes = reservasHoy.filter(r => r.estado === 'Pendiente').length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Panel administrador</Text>
          <Text style={styles.subtitle}>{cancha.nombre}</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: Colors.lightGreen }]}>
            <Text style={styles.statLabel}>Reservas hoy</Text>
            <Text style={styles.statValue}>{reservasHoy.length}</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: Colors.lightBlue }]}>
            <Text style={styles.statLabel}>Ingresos hoy</Text>
            <Text style={styles.statValue}>${(totalIngresos / 1000).toFixed(0)}K</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: Colors.lightOrange }]}>
            <Text style={styles.statLabel}>Pendientes</Text>
            <Text style={styles.statValue}>{reservasPendientes}</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: Colors.lightGray }]}>
            <Text style={styles.statLabel}>Calificación</Text>
            <Text style={styles.statValue}>{cancha.calificacion} ⭐</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximas reservas</Text>
          
          {reservasHoy.map((reserva) => (
            <View key={reserva.id} style={styles.reservaCard}>
              <View style={styles.reservaInfo}>
                <Text style={styles.reservaTime}>
                  {reserva.horaInicio} — {reserva.clienteNombre}
                </Text>
                <Text style={styles.reservaCancha}>{reserva.cancha}</Text>
              </View>
              <View style={[
                styles.badge,
                reserva.estado === 'Confirmada' 
                  ? styles.badgeConfirmada 
                  : styles.badgePendiente
              ]}>
                <Text style={[
                  styles.badgeText,
                  reserva.estado === 'Confirmada' 
                    ? styles.badgeTextConfirmada 
                    : styles.badgeTextPendiente
                ]}>
                  {reserva.estado}
                </Text>
              </View>
            </View>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  statCard: {
    flex: 1,
    minWidth: 150,
    padding: 20,
    borderRadius: 12,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  reservaCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  reservaInfo: {
    flex: 1,
  },
  reservaTime: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  reservaCancha: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeConfirmada: {
    backgroundColor: Colors.lightGreen,
  },
  badgePendiente: {
    backgroundColor: Colors.lightOrange,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  badgeTextConfirmada: {
    color: Colors.primary,
  },
  badgeTextPendiente: {
    color: Colors.warning,
  },
});
