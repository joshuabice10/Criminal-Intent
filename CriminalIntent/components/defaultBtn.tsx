import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type MyDefaultBtnProps = {
  children: React.ReactNode;
  btnColor: string;
  txtColor: string;
  fontSize?: number;
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
};

const MyDefaultBtn = ({
  children,
  btnColor,
  txtColor,
  style,
  fontSize,
  onPress,
}: MyDefaultBtnProps) => {
  return (
    <Pressable
      style={[styles.btn, { backgroundColor: btnColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, { color: txtColor, fontSize: fontSize }]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    backgroundColor: "cornflowerblue",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  btnText: {
    fontWeight: "bold",
  },
});

export default MyDefaultBtn;
