import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, router } from "expo-router";
import { useContext } from "react";
import { Pressable } from "react-native";
import ThemeContextProvider, { ThemeContext } from "../context/themeContext";

function LayoutContent() {
  const { mainColor, pageColor, textColor, boxTextColor, setColor } =
    useContext(ThemeContext);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: mainColor,
        },
        headerTintColor: boxTextColor,
        headerBlurEffect: undefined,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Criminal Intent",
          headerRight: () => (
            <>
              <Pressable
                onPress={() => router.push("/crime")}
                style={{ padding: 5 }}
              >
                <Entypo name="plus" size={28} color={boxTextColor} />
              </Pressable>
              <Pressable
                onPress={() => router.push("/settings")}
                style={{ padding: 5 }}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={boxTextColor}
                />
              </Pressable>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="crime"
        options={{
          title: "Criminal Intent",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/settings")}
              style={{ padding: 5 }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color={boxTextColor}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Criminal Intent",
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <LayoutContent />
    </ThemeContextProvider>
  );
}
