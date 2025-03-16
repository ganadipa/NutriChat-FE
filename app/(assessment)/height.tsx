import React, { useState } from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function HeightScreen() {
  const [height, setHeight] = useState("");

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="What is your height?"
      isNumericInput={true}
      numericValue={height}
      setNumericValue={setHeight}
      nextScreen="/(assessment)/current-weight"
      previousScreen="/(assessment)/age"
    />
  );
}
