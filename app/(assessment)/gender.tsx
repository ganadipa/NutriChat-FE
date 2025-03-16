import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function GenderScreen() {
  const options = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Non-binary", value: "non_binary" },
    { label: "Prefer not to say", value: "not_specified" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="What is your gender?"
      options={options}
      nextScreen="/(assessment)/age"
      previousScreen="/(assessment)/goal"
    />
  );
}
