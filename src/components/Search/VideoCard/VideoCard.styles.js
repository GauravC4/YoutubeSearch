import { StyleSheet } from "react-native";

const container = {
  height: 300,
  backgroundColor: "black",
  borderRadius: 10,
  overflow: "hidden",
};

const ls_container = {
  ...container,
  height: 120,
  borderRadius: 0,
  flexDirection: "row",
};

const thumbnailContainer = {
  width: "100%",
  height: "75%",
};

const ls_thumbnailContainer = {
  ...thumbnailContainer,
  width: "30%",
  height: "100%",
};

const img = {
  width: "100%",
  height: "100%",
  resizeMode: "stretch",
};

const lengthContainer = {
  backgroundColor: "black",
  position: "absolute",
  right: 10,
  bottom: 10,
  paddingHorizontal: 5,
  paddingVertical: 2,
  borderRadius: 2,
};

const length = {
  color: "white",
  fontWeight: "500",
};

const footer = {
  flexDirection: "row",
  marginTop: 14,
  paddingHorizontal: 10,
};

const ls_footer = {
  ...footer,
  flexDirection: "column-reverse",
  marginTop: 5,
  marginLeft: 5,
};

const channelThumbnailContainer = {
  flex: 1,
};

const ls_channelThumbnailContainer = {
  ...channelThumbnailContainer,
  flex: 1,
};

const channelThumbnail = {
  width: 50,
  height: 50,
  borderRadius: 25,
};

const details = {
  flex: 5,
};

const ls_details = {
  ...details,
  flex: 1,
};

const title = {
  color: "white",
  fontSize: 14,
  fontWeight: "600",
};

const channelStatsContainer = {
  flexDirection: "row",
};

const channelStats = {
  fontSize: 12,
  color: "#a1a1a1",
  marginRight: 5,
};

export default StyleSheet.create({
  container,
  ls_container,
  thumbnailContainer,
  ls_thumbnailContainer,
  img,
  lengthContainer,
  length,
  footer,
  ls_footer,
  channelThumbnailContainer,
  ls_channelThumbnailContainer,
  channelThumbnail,
  details,
  ls_details,
  title,
  channelStatsContainer,
  channelStats,
});
