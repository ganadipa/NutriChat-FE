import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AuthContext } from "@/lib/contexts/auth-context";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const segments = useSegments();
  const router = useRouter();

  // Load fonts if needed
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    // Add other fonts as needed
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate some resource loading or data fetching
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (!appIsReady) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      // Redirect to the onboarding page if not authenticated
      router.replace("/(auth)/onboarding");
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect to the main app if authenticated
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, segments, appIsReady]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {/* Use Slot instead of Stack for root layout */}
      <Slot />
    </AuthContext.Provider>
  );
}
