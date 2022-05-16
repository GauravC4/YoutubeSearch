import { StyleSheet, Dimensions } from "react-native";

const container = {
  height: Dimensions.get("screen").height / 2,
  justifyContent: "center",
};

const skeleton_container = {
  paddingHorizontal: 10,
};

const skeleton = {
  marginVertical: 50,
};

const ls_skeleton = {
  marginVertical: 2,
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
  skeleton_container,
  skeleton,
  ls_skeleton,
  text,
});
