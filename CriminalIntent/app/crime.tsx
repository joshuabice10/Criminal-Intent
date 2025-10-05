import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import MyDefaultBtn from "../components/defaultBtn";
import ImageBox from "../components/imageBox";
import { ThemeContext } from "../context/themeContext";
import { addCrime, deleteCrime, getCrimes } from "../storage/crimesStorage";

export default function Crime() {
  const { passedid } = useLocalSearchParams();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    if (!passedid) return;

    async function loadCrime() {
      const crimes = await getCrimes();
      const crime = crimes.find((c) => c.id === passedid);
      if (crime) {
        setTitle(crime.title);
        setDetails(crime.details);
        setEnabled(crime.solved);
        setImageUri(crime.uri);
      }
    }

    loadCrime();
  }, []);

  const { mainColor, pageColor, textColor, boxTextColor } =
    useContext(ThemeContext);

  const now = new Date();
  const dateString = now.toDateString();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const resultUri = result.assets[0].uri;
      setImageUri(resultUri);
    } else {
      alert("You did not select an image.");
    }
  };

  async function handleAddCrime() {
    const id = uuid();
    const time = new Date();
    const timeStamp = time.toISOString();

    await addCrime({
      id: id,
      uri: imageUri,
      title: title,
      details: details,
      solved: enabled,
      timestamp: timeStamp,
    });

    Alert.alert("Successful", "Your crime has been filed.", [
      { text: "OK", style: "default" },
    ]);
  }

  async function handleDeleteCrime() {
    const id = passedid;
    await deleteCrime(id);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: pageColor }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topSection}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <ImageBox uri={imageUri} />
            <Pressable
              style={[styles.cameraBtn, { backgroundColor: mainColor }]}
              onPress={pickImageAsync}
            >
              <FontAwesome name="camera" size={24} color={textColor} />
            </Pressable>
          </View>
          <TextInput
            style={[styles.title, { color: textColor }]}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View
          style={{
            minHeight: 150,
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text style={[styles.detailsTxt, { color: textColor }]}>Details</Text>
          <TextInput
            style={[styles.detailsBox, { color: textColor }]}
            placeholder="What happened?"
            value={details}
            onChangeText={setDetails}
            multiline={true}
          />
        </View>
        <MyDefaultBtn
          btnColor={mainColor}
          txtColor={boxTextColor}
          fontSize={15}
          style={{ alignSelf: "center", width: "95%", marginTop: 10 }}
        >
          {dateString}
        </MyDefaultBtn>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: textColor }}>Solved</Text>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{ false: "#ccc", true: "#00d40eff" }}
            thumbColor="#fff"
          />
        </View>
        <MyDefaultBtn
          btnColor={mainColor}
          txtColor={boxTextColor}
          fontSize={15}
          style={{ alignSelf: "center", width: "95%", marginTop: 10 }}
          onPress={() => {
            if (!passedid) {
              handleAddCrime();
            } else {
              handleDeleteCrime().then(async () => {
                handleAddCrime();
              });
            }
          }}
        >
          Save
        </MyDefaultBtn>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flexDirection: "row",
    width: "100%",
    minHeight: 225,
    justifyContent: "space-around",
  },
  cameraBtn: {
    height: 50,
    width: 70,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    width: 175,
    height: 50,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#c2c2c2",
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsTxt: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsBox: {
    height: 125,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#c2c2c2",
    overflow: "scroll",
    fontSize: 15,
  },
});
