import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "themeColors";

export async function saveTheme(theme) {
  try {
    await AsyncStorage.setItem(THEME_KEY, JSON.stringify(theme));
  } catch (e) {
    console.error("Error saving theme:", e);
  }
}

export async function loadTheme() {
  try {
    const jsonValue = await AsyncStorage.getItem(THEME_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error loading theme:", e);
    return null;
  }
}

export async function clearTheme() {
  try {
    await AsyncStorage.removeItem(THEME_KEY);
  } catch (e) {
    console.error("Error clearing theme:", e);
  }
}
