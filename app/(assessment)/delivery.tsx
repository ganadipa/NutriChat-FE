import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function DeliveryScreen() {
  const options = [
    { label: "Yes, regularly", value: "regularly" },
    { label: "Occasionally", value: "occasionally" },
    { label: "Rarely", value: "rarely" },
    { label: "Never", value: "never" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="Do you regularly use delivery services for meals?"
      options={options}
      nextScreen="/(assessment)/meal-preferences"
      previousScreen="/(assessment)/stress"
    />
  );
}
