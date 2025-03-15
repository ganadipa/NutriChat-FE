import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#000000" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="onboarding"
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
