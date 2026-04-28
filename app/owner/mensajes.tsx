import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { chatsMock } from '../../data/mockData';
import type { Chat } from '../../types';

export default function Mensajes() {
  const [openChat, setOpenChat] = useState<Chat | null>(null);

  const getLastMessage = (chat: typeof chatsMock[0]) => {
    if (chat.mensajes.length === 0) return 'Sin mensajes';
    const last = chat.mensajes[chat.mensajes.length - 1];
    return last.mensaje;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mensajes</Text>
        <Text style={styles.subtitle}>{chatsMock.length} conversaciones</Text>
      </View>

      <ScrollView style={styles.chatsContainer}>
        {chatsMock.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatItem}
            onPress={() => setOpenChat(chat)}
          >
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {chat.clienteNombre.substring(0, 2).toUpperCase()}
                </Text>
              </View>
              {chat.online && <View style={styles.onlineDot} />}
            </View>
            
            <View style={styles.chatContent}>
              <View style={styles.chatTop}>
                <Text style={styles.chatName}>{chat.clienteNombre}</Text>
                <Text style={styles.chatTime}>
                  {chat.mensajes[chat.mensajes.length - 1]?.timestamp || ''}
                </Text>
              </View>
              <Text style={styles.chatSubtitle}>{chat.canchaName}</Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {getLastMessage(chat)}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Conversation Modal */}
      <Modal
        visible={!!openChat}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        {openChat && (
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setOpenChat(null)} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <View style={styles.chatHeader}>
                <View style={styles.avatarContainer}>
                  <View style={styles.modalAvatar}>
                    <Text style={styles.avatarText}>
                      {openChat.clienteNombre.substring(0, 2).toUpperCase()}
                    </Text>
                  </View>
                  {openChat.online && <View style={styles.onlineDot} />}
                </View>
                <View style={styles.chatInfo}>
                  <Text style={styles.modalChatName}>{openChat.clienteNombre}</Text>
                  <Text style={styles.chatSubtitle}>{openChat.canchaName}</Text>
                </View>
              </View>
            </View>

            <ScrollView style={styles.messagesContainer}>
              {openChat.mensajes.map((mensaje) => (
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
        )}
      </Modal>
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
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  chatsContainer: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: 'white',
  },
  chatContent: {
    flex: 1,
  },
  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  chatSubtitle: {
    fontSize: 13,
    color: Colors.primary,
    marginBottom: 2,
  },
  chatTime: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  lastMessage: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalHeader: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  modalAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatInfo: {
    marginLeft: 12,
  },
  modalChatName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messageWrapper: {
    marginBottom: 16,
  },
  messageWrapperClient: {
    alignItems: 'flex-start',
  },
  messageWrapperOwner: {
    alignItems: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  messageBubbleClient: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
  },
  messageBubbleOwner: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
  },
  messageTextClient: {
    color: Colors.text,
  },
  messageTextOwner: {
    color: 'white',
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
