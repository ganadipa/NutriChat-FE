import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function PhysicalActivity() {
  const options = [
    { label: "0-1 times per week", value: "0-1" },
    { label: "2-3 times per week", value: "2-3" },
    { label: "3-4 times per week", value: "3-4" },
    { label: "More than 4 times", value: "5+" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How often do you engage in physical activities per week?"
      options={options}
      nextScreen="/(assessment)/diet-habits"
      previousScreen="/(assessment)/welcome"
    />
  );
}
