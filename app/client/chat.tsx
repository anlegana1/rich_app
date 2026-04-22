import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { chatsMock } from '../../data/mockData';

export default function Chat() {
  const chat = chatsMock[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.chatHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>CN</Text>
            </View>
            <View style={styles.onlineDot} />
          </View>
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>{chat.canchaName}</Text>
            <Text style={styles.chatStatus}>● En línea</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {chat.mensajes.map((mensaje) => (
          <View 
            key={mensaje.id} 
            style={[
              styles.messageWrapper,
              mensaje.isOwner ? styles.messageWrapperOwner : styles.messageWrapperClient
            ]}
          >
            <View style={[
              styles.messageBubble,
              mensaje.isOwner ? styles.messageBubbleOwner : styles.messageBubbleClient
            ]}>
              <Text style={[
                styles.messageText,
                mensaje.isOwner ? styles.messageTextOwner : styles.messageTextClient
              ]}>
                {mensaje.mensaje}
              </Text>
            </View>
            <Text style={styles.messageTime}>{mensaje.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribir un mensaje..."
          placeholderTextColor={Colors.textSecondary}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
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
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  chatInfo: {
    marginLeft: 12,
  },
  chatName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  chatStatus: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messageWrapper: {
    marginBottom: 16,
  },
  messageWrapperClient: {
    alignItems: 'flex-end',
  },
  messageWrapperOwner: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  messageBubbleClient: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  messageBubbleOwner: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
  },
  messageTextClient: {
    color: 'white',
  },
  messageTextOwner: {
    color: Colors.text,
  },
  messageTime: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    fontSize: 16,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
