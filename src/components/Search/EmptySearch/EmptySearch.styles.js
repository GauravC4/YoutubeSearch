import { StyleSheet, Dimensions } from "react-native";

const container = {
  height: Dimensions.get("screen").height / 2,
  justifyContent: "center",
};

const ls_container = {
  ...container,
  height: Dimensions.get("screen").height / 4,
};

const text = {
  color: "#c9c9c9",
  fontSize: 18,
  marginVertical: 10,
  width: "100%",
  textAlign: "center",
};

export default StyleSheet.create({
  container,
  ls_container,
  text,
});
