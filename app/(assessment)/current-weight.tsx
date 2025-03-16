import React, { useState } from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function CurrentWeightScreen() {
  const [weight, setWeight] = useState("");

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="What is your current weight?"
      isNumericInput={true}
      numericValue={weight}
      setNumericValue={setWeight}
      nextScreen="/(assessment)/target-weight"
      previousScreen="/(assessment)/height"
    />
  );
}
