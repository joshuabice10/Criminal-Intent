import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { getCrimes } from "../storage/crimesStorage";
import { loadTheme } from "../storage/themeStorage";

export default function Index() {
  const router = useRouter();
  const { pageColor, textColor, setColor } = useContext(ThemeContext);
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    loadSavedTheme();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadCrimes();

      return () => {};
    }, [])
  );

  async function loadSavedTheme() {
    const savedTheme = await loadTheme();
    const theme = {
      mainColor: savedTheme.mainColor,
      pageColor: savedTheme.pageColor,
      textColor: savedTheme.textColor,
      boxTextColor: savedTheme.boxTextColor,
    };
    setColor(theme);
  }

  async function loadCrimes() {
    const storedCrimes = await getCrimes();
    setCrimes(storedCrimes);
  }

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        width: "100%",
        backgroundColor: pageColor,
      }}
    >
      <FlatList
        data={crimes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={{
              height: 80,
              paddingLeft: 10,
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
            onPress={() =>
              router.push({
                pathname: "/crime",
                params: {
                  passedid: item.id,
                },
              })
            }
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 5,
                color: textColor,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 14, color: textColor }}>
              {item.timestamp}
            </Text>
            {item.solved && (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: [{ translateY: -20 }],
                  marginRight: 15,
                }}
              >
                <MaterialCommunityIcons
                  name="handcuffs"
                  size={40}
                  color={textColor}
                />
              </View>
            )}
          </Pressable>
        )}
      />
    </View>
  );
}
