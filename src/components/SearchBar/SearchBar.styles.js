import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginLeft: "15%",
    position: "relative",
  },
  input: {
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 60,
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#303030",
  },
  button: {
    position: "absolute",
    top: "35%",
    right: 15,
  },
  faSearch: {
    color: "red",
  },
});

export default styles;
