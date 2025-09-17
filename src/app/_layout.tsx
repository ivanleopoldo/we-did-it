import "@root/global.css";
import "react-native-reanimated";

import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Toaster } from "sonner-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "index",
  initialRouteName: "index",
};

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                headerShown: true,
              }}
            />
          </Stack>
          <PortalHost />
          <Toaster />
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
