import React from "react";
import AssessmentQuestion from "../../components/AssessmentQuestion";

export default function MealPreferencesScreen() {
  const options = [
    { label: "No dietary restrictions", value: "none" },
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Vegan", value: "vegan" },
    { label: "Keto/Low-carb", value: "keto" },
    { label: "Gluten-free", value: "gluten_free" },
    { label: "Other", value: "other" },
  ];

  return (
    <AssessmentQuestion
      title="Physical Health Assessment"
      question="How would you describe your meal preferences?"
      options={options}
      nextScreen="/(assessment)/energy-levels"
      previousScreen="/(assessment)/delivery"
    />
  );
}
