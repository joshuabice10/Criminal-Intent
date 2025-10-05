import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "crimes";

export async function getCrimes() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error reading posts:", e);
    return [];
  }
}

export async function addCrime(newPost) {
  try {
    const posts = await getCrimes();
    posts.push(newPost);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error("Error saving post:", e);
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log("All storage cleared!");
  } catch (e) {
    console.error("Failed to clear storage", e);
  }
}

export async function deleteCrime(id) {
  try {
    const crimes = await getCrimes();
    const filteredCrimes = crimes.filter((crime) => crime.id !== id);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCrimes));
    console.log(`Crime with id ${id} deleted successfully!`);
  } catch (e) {
    console.error("Error deleting crime:", e);
  }
}
