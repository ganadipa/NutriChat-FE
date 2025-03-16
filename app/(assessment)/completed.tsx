import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "@/lib/contexts/auth-context";

export default function CompletedScreen() {
  const router = useRouter();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleContinue = () => {
    // Set user as authenticated after completing assessment
    setIsAuthenticated(true);
    // The effect in _layout.tsx will handle the navigation to tabs
  };

  return (
    <ImageBackground
      source={require("../../assets/images/adaptive-icon.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.congratsText}>
            Congratulations on leveling up!
          </Text>

          <View style={styles.levelIndicator}>
            <LinearGradient
              colors={["#FF7F27", "#FF5722"]}
              style={styles.levelCircle}
            >
              <Text style={styles.levelText}>LVL 1</Text>
            </LinearGradient>
          </View>

          <Text style={styles.description}>
            Based on your assessment, we've created a personalized nutrition
            plan to help you reach your goals. Let's start your journey!
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Begin</Text>
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
  congratsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  levelIndicator: {
    marginVertical: 20,
  },
  levelCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  levelText: {
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
