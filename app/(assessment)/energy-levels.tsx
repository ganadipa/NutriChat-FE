import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function EnergyLevelsScreen() {
  const options = [
    { label: "Low (I feel tired most of the day)", value: "low" },
    { label: "Moderate (I have periods of high energy)", value: "moderate" },
    { label: "High (I have energy throughout the day)", value: "high" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How would you describe your energy levels throughout the day?"
      options={options}
      nextScreen="/(assessment)/completed"
      previousScreen="/(assessment)/meal-preferences"
    />
  );
}
