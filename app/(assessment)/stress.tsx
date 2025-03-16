import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function StressScreen() {
  const options = [
    { label: "Rarely or never", value: "rarely" },
    { label: "1-2 times per week", value: "1-2" },
    { label: "3-4 times per week", value: "3-4" },
    { label: "Nearly every day", value: "daily" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How often do you feel tired or stressed at physical capacity in a week?"
      options={options}
      nextScreen="/(assessment)/delivery"
      previousScreen="/(assessment)/sleep"
    />
  );
}
