import Entypo from "@expo/vector-icons/Entypo";
import { Stack } from "expo-router";
import { useContext } from "react";
import { Pressable } from "react-native";
import ThemeContextProvider, { ThemeContext } from "../context/themeContext";

function LayoutContent() {
  const { color, setColor } = useContext(ThemeContext);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: color,
        },
        headerTintColor: "white",
        headerBlurEffect: undefined,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerRight: () => (
          <Pressable
            onPress={() => {
              console.log("Header button pressed");
            }}
            style={{ padding: 10 }}
          >
            <Entypo name="plus" size={24} color="white" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="index"
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
