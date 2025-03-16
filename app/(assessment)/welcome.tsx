import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/adaptive-icon.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to the first step!</Text>

          <View style={styles.stepIndicator}>
            <LinearGradient
              colors={["#FF7F27", "#FF5722"]}
              style={styles.stepCircle}
            >
              <Text style={styles.stepText}>1 of 12</Text>
            </LinearGradient>
          </View>

          <Text style={styles.description}>
            We need to collect some basic information to create a personalized
            nutrition plan that works for you.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(assessment)/physical-activity")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.brandText}>NutriChat</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  stepIndicator: {
    marginVertical: 20,
  },
  stepCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FF7F27",
    fontSize: 16,
    fontWeight: "bold",
  },
  brandText: {
    color: "#FF7F27",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
