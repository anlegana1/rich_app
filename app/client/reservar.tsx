import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { canchas, horasDisponibles } from '../../data/mockData';

export default function Reservar() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const cancha = canchas.find(c => c.id === id) || canchas[0];
  
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedHora, setSelectedHora] = useState('11:00');

  const handleConfirmar = () => {
    router.push('/client/reservas');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Seleccionar fecha y hora</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView>
        <View style={styles.canchaInfo}>
          <Text style={styles.canchaName}>{cancha.nombre}</Text>
          <Text style={styles.canchaType}>{cancha.tipo}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abril 2026</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.datesContainer}>
              {[14,15,16,17,18,19,20,21,22].map(day => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dateBox,
                    selectedDate === day && styles.dateBoxActive
                  ]}
                  onPress={() => setSelectedDate(day)}
                >
                  <Text style={[
                    styles.dateText,
                    selectedDate === day && styles.dateTextActive
                  ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horas disponibles · Miércoles {selectedDate}</Text>
          <View style={styles.horasGrid}>
            {horasDisponibles.map(hora => {
              const isTaken = hora === '09:00' || hora === '10:00';
              return (
                <TouchableOpacity
                  key={hora}
                  style={[
                    styles.horaBox,
                    isTaken && styles.horaBoxTaken,
                    selectedHora === hora && styles.horaBoxActive
                  ]}
                  onPress={() => !isTaken && setSelectedHora(hora)}
                  disabled={isTaken}
                >
                  <Text style={[
                    styles.horaText,
                    isTaken && styles.horaTextTaken,
                    selectedHora === hora && styles.horaTextActive
                  ]}>
                    {hora}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen de reserva</Text>
          <View style={styles.resumenBox}>
            <View style={styles.resumenRow}>
              <Ionicons name="calendar" size={20} color={Colors.primary} />
              <Text style={styles.resumenText}>Miércoles 22 abril · {selectedHora} - 1 hora</Text>
            </View>
            <View style={styles.resumenRow}>
              <Ionicons name="cash" size={20} color={Colors.primary} />
              <Text style={styles.resumenText}>${cancha.precio.toLocaleString()} · 1 hora</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmar}
        >
          <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  canchaInfo: {
    padding: 20,
    backgroundColor: Colors.lightGreen,
    alignItems: 'center',
  },
  canchaName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  canchaType: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  datesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  dateBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
  },
  dateBoxActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  dateText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  dateTextActive: {
    color: 'white',
  },
  horasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  horaBox: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  horaBoxActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  horaBoxTaken: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.border,
    opacity: 0.5,
  },
  horaText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  horaTextActive: {
    color: 'white',
  },
  horaTextTaken: {
    textDecorationLine: 'line-through',
  },
  resumenBox: {
    gap: 12,
  },
  resumenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resumenText: {
    fontSize: 16,
    color: Colors.text,
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  confirmButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
