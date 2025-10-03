import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { ThemeContext } from "../context/themeContext";

export default function Index() {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Just a quick test</Text>
      <Pressable
        onPress={() => {
          setColor("red"), console.log("did it! Color is: ", color);
        }}
        style={{ padding: 20, backgroundColor: "red", margin: 10 }}
      >
        <Text>Color Changer</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setColor("cornflowerblue"), console.log("did it! Color is: ", color);
        }}
        style={{ padding: 20, backgroundColor: "blueviolet" }}
      >
        <Text>Color Changer</Text>
      </Pressable>
    </View>
  );
}
