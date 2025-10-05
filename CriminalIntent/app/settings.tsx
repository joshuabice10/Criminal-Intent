import { useContext } from "react";
import { Text, View } from "react-native";
import MyDefaultBtn from "../components/defaultBtn";
import { ThemeContext } from "../context/themeContext";
import { clearTheme, saveTheme } from "../storage/themeStorage";

export default function Settings() {
  const { mainColor, pageColor, textColor, boxTextColor, setColor } =
    useContext(ThemeContext);

  const handleThemeChange = async (theme) => {
    try {
      await clearTheme();
      await saveTheme(theme);
    } catch (e) {
      console.error("Error updating theme:", e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: pageColor,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Pick a Theme
      </Text>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={async () => {
          const newTheme = {
            mainColor: "blueviolet",
            pageColor: "white",
            textColor: "black",
            boxTextColor: "white",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Default
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#0c0c0cff",
            pageColor: "#141414ff",
            textColor: "#ffffffff",
            boxTextColor: "#ffffffff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Black
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#f3f3f3ff",
            pageColor: "#ffffffff",
            textColor: "#000000",
            boxTextColor: "#000000",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        White
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#00a6ffff",
            pageColor: "#afe3ffff",
            textColor: "#000000ff",
            boxTextColor: "#ffffffff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Blue
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#ffbf00ff",
            pageColor: "#ffd864ff",
            textColor: "#000000ff",
            boxTextColor: "#000000ff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Yellow
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#ff0000ff",
            pageColor: "#141414ff",
            textColor: "#ffffffff",
            boxTextColor: "#ffffffff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Red
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#9500ffff",
            pageColor: "#141414ff",
            textColor: "#ffffffff",
            boxTextColor: "#ffffffff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Purple
      </MyDefaultBtn>
      <MyDefaultBtn
        btnColor={mainColor}
        txtColor={boxTextColor}
        fontSize={20}
        style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}
        onPress={() => {
          const newTheme = {
            mainColor: "#5dbb6d",
            pageColor: "#141414ff",
            textColor: "#ffffffff",
            boxTextColor: "#ffffffff",
          };
          setColor(newTheme);
          handleThemeChange(newTheme);
        }}
      >
        Tears of the Kingdom
      </MyDefaultBtn>
    </View>
  );
}
