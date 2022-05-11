import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 300,
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
    marginVertical: 10,
  },
  thumbnailContainer: {
    width: "100%",
    height: "75%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  lengthContainer: {
    backgroundColor: "black",
    position: "absolute",
    right: 10,
    bottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 2,
  },
  length: {
    color: "white",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    marginTop: 14,
    paddingHorizontal: 10,
  },
  channelThumbnailContainer: {
    flex: 1,
  },
  channelThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    flex: 5,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  channelStatsContainer: {
    flexDirection: "row",
  },
  channelStats: {
    fontSize: 12,
    color: "#a1a1a1",
    marginRight: 5,
  },
});

export default styles;
