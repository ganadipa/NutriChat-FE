import React, { useState } from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function TargetWeightScreen() {
  const [weight, setWeight] = useState("");

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="What is your target weight?"
      isNumericInput={true}
      numericValue={weight}
      setNumericValue={setWeight}
      nextScreen="/(assessment)/sleep"
      previousScreen="/(assessment)/current-weight"
    />
  );
}
