import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import type { LinkProps } from "expo-router";

interface Option {
  label: string;
  value: string | number;
}

interface AssessmentQuestionProps {
  title: string;
  question: string;
  options?: Option[];
  nextScreen: LinkProps["href"];
  previousScreen?: LinkProps["href"];
  isNumericInput?: boolean;
  numericValue?: string;
  setNumericValue?: (value: string) => void;
  showBottomTabs?: boolean;
}
export default function AssessmentQuestion({
  title,
  question,
  options = [],
  nextScreen,
  previousScreen,
  isNumericInput = false,
  numericValue = "",
  setNumericValue,
  showBottomTabs = true,
}: AssessmentQuestionProps) {
  const router = useRouter();

  const handleNext = (value?: string | number) => {
    // Here you would typically save the selected answer to state/context
    // For now, just navigate to the next screen
    router.push(nextScreen);
  };

  const handleBack = () => {
    if (previousScreen) {
      router.push(previousScreen);
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.question}>{question}</Text>

        {isNumericInput ? (
          <View style={styles.numericInputContainer}>
            <TextInput
              style={styles.numericInput}
              value={numericValue}
              onChangeText={setNumericValue}
              keyboardType="numeric"
              placeholder="Enter value"
              placeholderTextColor="#777"
            />
          </View>
        ) : (
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleNext(option.value)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {isNumericInput && (
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => handleNext(numericValue)}
          >
            <Text style={styles.continueButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {showBottomTabs && (
        <View style={styles.tabIndicator}>
          <View style={styles.tabsContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <View key={num} style={styles.tab} />
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backButton: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 40, // To offset the back button width
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  question: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  numericInputContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  numericInput: {
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 15,
    width: "50%",
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  bottomButtonContainer: {
    padding: 20,
  },
  continueButton: {
    backgroundColor: "#FF7F27",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabIndicator: {
    paddingBottom: 20,
    alignItems: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    padding: 10,
  },
  tab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3A3A3A",
    marginHorizontal: 5,
  },
});
