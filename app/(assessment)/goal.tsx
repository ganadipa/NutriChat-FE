import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function GoalScreen() {
  const options = [
    { label: "Lose weight", value: "lose_weight" },
    { label: "Maintain weight", value: "maintain_weight" },
    { label: "Gain muscle", value: "gain_muscle" },
    { label: "Improve overall health", value: "improve_health" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="What is your goal?"
      options={options}
      nextScreen="/(assessment)/gender"
      previousScreen="/(assessment)/diet-habits"
    />
  );
}
