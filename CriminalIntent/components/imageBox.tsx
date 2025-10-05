import { Image, StyleSheet, View } from "react-native";

type Props = {
  uri?: string | null;
  size?: number;
};

export default function ImageBox({ uri, size = 150 }: Props) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size * 0.1 },
      ]}
    >
      {uri ? (
        <Image source={{ uri }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholder: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
});
