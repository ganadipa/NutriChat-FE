import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function SleepScreen() {
  const options = [
    { label: "Less than 4 hours", value: "<4" },
    { label: "4-6 hours", value: "4-6" },
    { label: "6-8 hours", value: "6-8" },
    { label: "More than 8 hours", value: ">8" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="On average, how many hours do you sleep during the day?"
      options={options}
      nextScreen="/(assessment)/stress"
      previousScreen="/(assessment)/target-weight"
    />
  );
}
