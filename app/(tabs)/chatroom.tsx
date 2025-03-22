import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hi chat, aku baru aja makan nasi goreng. Tolong masukkan ke list daftar makanan harian ku ya...", sender: "user" },
    { id: "2", text: "Noted, Perkiraan kandungan karbohidrat, lemak, dan protein dalam satu piring nasi goreng (sekitar 300 gram):\n\n• Karbohidrat: ~80-90 gram\n• Lemak: ~15-25 gram\n• Protein: ~10-20 gram\n\nKamu bisa lebih spesifik jika ingin analisis yang lebih tepat!", sender: "bot" },
    { id: "3", text: "Pas banget, kira-kira segitu", sender: "user" },
    { id: "4", text: "Oke kalau begitu, aku izin memasukkannya ke list daftar makananmu, ya", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nutrichat</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === "user" ? styles.userBubble : styles.botBubble]}>
            <Text style={[styles.messageText, item.sender === "user" ? styles.userText : styles.botText]}>
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send a message..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: 16, paddingTop: 40 },
  header: { fontSize: 20, fontWeight: "bold", color: "#ff7f00", textAlign: "left", marginBottom: 10 },
  chatContainer: { flexGrow: 1, justifyContent: "flex-end" },
  messageBubble: { maxWidth: "80%", padding: 10, borderRadius: 10, marginBottom: 8 },
  userBubble: { alignSelf: "flex-end", backgroundColor: "#1e3a8a" },
  botBubble: { alignSelf: "flex-start", backgroundColor: "#e5e7eb" },
  messageText: { fontSize: 14 },
  userText: { color: "white" },
  botText: { color: "black" },
  inputContainer: { flexDirection: "row", alignItems: "center", paddingVertical: 10, borderTopWidth: 1, borderColor: "#333" },
  input: { flex: 1, backgroundColor: "#333", color: "white", paddingVertical: 10, paddingHorizontal: 15, borderRadius: 25 },
  sendButton: { marginLeft: 10, backgroundColor: "#ff7f00", padding: 10, borderRadius: 20 },
  sendText: { color: "white", fontSize: 16 },
});
