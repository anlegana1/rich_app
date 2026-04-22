import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { canchas } from '../../data/mockData';

export default function MiCancha() {
  const cancha = canchas[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Mi cancha</Text>
          <Text style={styles.subtitle}>Editar información</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Fotos de la cancha</Text>
          <View style={styles.photosContainer}>
            <View style={[styles.photo, { backgroundColor: cancha.fotos[0] }]} />
            <View style={[styles.photo, { backgroundColor: cancha.fotos[1] }]} />
            <TouchableOpacity style={styles.addPhoto}>
              <Ionicons name="add" size={40} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Nombre</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{cancha.nombre}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Dirección</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{cancha.direccion}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Precio por hora</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>${cancha.precio.toLocaleString()} COP</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Teléfono</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{cancha.telefono}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Tipo de cancha</Text>
          <View style={styles.typeContainer}>
            <TouchableOpacity style={styles.typeButtonActive}>
              <Text style={styles.typeTextActive}>Fútbol 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeButtonInactive}>
              <Text style={styles.typeTextInactive}>Fútbol 11</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Amenidades</Text>
          <View style={styles.amenidadesContainer}>
            {cancha.amenidades.map((amenidad, index) => (
              <View key={index} style={styles.amenidadChip}>
                <Ionicons name="checkmark-circle" size={16} color={Colors.primary} />
                <Text style={styles.amenidadText}>{amenidad}</Text>
              </View>
            ))}
          </View>
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
  section: {
    padding: 20,
    paddingTop: 10,
  },
  sectionLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  photosContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  addPhoto: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  infoText: {
    fontSize: 16,
    color: Colors.text,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  typeButtonActive: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  typeButtonInactive: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  typeTextActive: {
    color: 'white',
    fontWeight: '600',
  },
  typeTextInactive: {
    color: Colors.textSecondary,
  },
  amenidadesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenidadChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  amenidadText: {
    color: Colors.primary,
    fontSize: 14,
  },
});
