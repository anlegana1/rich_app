import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function Perfil() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarText}>CM</Text>
          </View>
          <Text style={styles.userName}>Carlos Martínez</Text>
          <Text style={styles.userEmail}>carlos.m@email.com</Text>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="person-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Editar perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="card-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Métodos de pago</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="notifications-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Notificaciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="help-circle-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Ayuda y soporte</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="settings-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Configuración</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="document-text-outline" size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>Términos y condiciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => router.push('/')}
          >
            <Ionicons name="log-out-outline" size={24} color={Colors.danger} />
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>Versión 1.0.0</Text>
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
    alignItems: 'center',
    padding: 32,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  section: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.danger,
  },
  version: {
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: 14,
    padding: 20,
  },
});
