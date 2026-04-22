import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import { reservasAgenda } from '../../data/mockData';

const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
const horas = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'];

export default function Agenda() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Agenda</Text>
          <Text style={styles.subtitle}>Martes 21 - Canchas del Norte</Text>
        </View>

        <View style={styles.diasContainer}>
          {dias.map((dia, index) => (
            <TouchableOpacity 
              key={dia} 
              style={[styles.diaButton, index === 1 && styles.diaButtonActive]}
            >
              <Text style={[styles.diaText, index === 1 && styles.diaTextActive]}>
                {dia}
              </Text>
              {index === 1 && <Text style={styles.diaNumber}>21</Text>}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.agendaContainer}>
          {horas.map((hora, index) => (
            <View key={hora} style={styles.horaRow}>
              <Text style={styles.horaLabel}>{hora}</Text>
              <View style={styles.eventContainer}>
                {index === 0 && (
                  <View style={[styles.eventCard, styles.eventCardGreen]}>
                    <Text style={styles.eventTitle}>Carlos M.</Text>
                    <Text style={styles.eventTime}>8:00-10:00 · Cancha 1</Text>
                  </View>
                )}
                {index === 3 && (
                  <View style={[styles.eventCard, styles.eventCardBlue]}>
                    <Text style={styles.eventTitle}>Luisa P.</Text>
                    <Text style={styles.eventTime}>11:00-12:00 · C2</Text>
                  </View>
                )}
                {index === 5 && (
                  <View style={[styles.eventCard, styles.eventCardGray]}>
                    <Text style={styles.eventTitle}>Mantenimiento</Text>
                  </View>
                )}
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
  diasContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 20,
  },
  diaButton: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  diaButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  diaText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  diaTextActive: {
    color: 'white',
    fontWeight: '600',
  },
  diaNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  agendaContainer: {
    paddingHorizontal: 20,
  },
  horaRow: {
    flexDirection: 'row',
    minHeight: 60,
    marginBottom: 8,
  },
  horaLabel: {
    width: 60,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  eventContainer: {
    flex: 1,
  },
  eventCard: {
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
  },
  eventCardGreen: {
    backgroundColor: Colors.lightGreen,
    borderLeftColor: Colors.primary,
  },
  eventCardBlue: {
    backgroundColor: Colors.lightBlue,
    borderLeftColor: Colors.secondary,
  },
  eventCardGray: {
    backgroundColor: Colors.lightGray,
    borderLeftColor: Colors.textSecondary,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  eventTime: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});
