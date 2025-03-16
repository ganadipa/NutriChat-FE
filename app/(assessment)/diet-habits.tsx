import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function DietHabits() {
  const options = [
    { label: "None", value: "none" },
    { label: "1-2 servings", value: "1-2" },
    { label: "3-4 servings", value: "3-4" },
    { label: "More than 5 servings", value: "5+" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How many servings of fruits and vegetables do you consume daily?"
      options={options}
      nextScreen="/(assessment)/goal"
      previousScreen="/(assessment)/physical-activity"
    />
  );
}
