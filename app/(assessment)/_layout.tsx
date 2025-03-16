import React from "react";
import { Stack } from "expo-router";

export default function AssessmentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#121212" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="physical-activity" />
      <Stack.Screen name="diet-habits" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="age" />
      <Stack.Screen name="height" />
      <Stack.Screen name="current-weight" />
      <Stack.Screen name="target-weight" />
      <Stack.Screen name="sleep" />
      <Stack.Screen name="stress" />
      <Stack.Screen name="delivery" />
      <Stack.Screen name="meal-preferences" />
      <Stack.Screen name="energy-levels" />
      <Stack.Screen name="completed" />
    </Stack>
  );
}
