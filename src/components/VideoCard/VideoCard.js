import React from "react";

import { View, Image, Text } from "react-native";

import styles from "./VideoCard.styles";

const DATA = {
  position_on_page: 11,
  title: "2020 Portrayed by Star Wars",
  link: "https://www.youtube.com/watch?v=L8Sezzl7_zU",
  channel: {
    name: "Supercuts Delight",
    link: "https://www.youtube.com/channel/UCg_s1VNrLoV4cFsH9TKXnuw",
    thumbnail:
      "https://yt3.ggpht.com/a-/AOh14GhpsylVb0S_fngM7KPSLXTsrSPIMdLMn3JEyA=s68-c-k-c0x00ffffff-no-rj-mo",
  },
  published_date: "1 month ago",
  views: 1488270,
  length: "7:04",
  description:
    "A Parody of Star Wars in which I relate events that have happened in 2020 to scenes and clips from Star Wars. Basically a recap ...",
  thumbnail: {
    static:
      "https://i.ytimg.com/vi/L8Sezzl7_zU/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1L30hsaHnNpdPrDpEQ31VVwnW4w",
    rich: "https://i.ytimg.com/an_webp/L8Sezzl7_zU/mqdefault_6s.webp?du=3000&sqp=CMzk9PwF&rs=AOn4CLCOipXxYpZjKuyaNVpBvEToV8tFdQ",
  },
};

export default function VideoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: DATA.thumbnail.static }} style={styles.img} />
        <View style={styles.lengthContainer}>
          <Text style={styles.length}>{DATA.length}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.channelThumbnailContainer}>
          <Image
            source={{ uri: DATA.channel.thumbnail }}
            style={styles.channelThumbnail}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{DATA.title}</Text>
          <View style={styles.channelStatsContainer}>
            <Text style={styles.channelStats}>{DATA.channel.name}</Text>
            <Text style={styles.channelStats}>{DATA.views} views</Text>
            <Text style={styles.channelStats}>{DATA.published_date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
