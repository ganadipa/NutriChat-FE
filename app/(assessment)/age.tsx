import React, { useState } from "react";
import { TextInput } from "react-native";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function AgeScreen() {
  const [age, setAge] = useState("");

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How old are you?"
      isNumericInput={true}
      numericValue={age}
      setNumericValue={setAge}
      nextScreen="/(assessment)/height"
      previousScreen="/(assessment)/gender"
    />
  );
}
