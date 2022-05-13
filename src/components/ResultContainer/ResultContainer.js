import React from "react";
import { FlatList } from "react-native";

import VideoCard from "./VideoCard/VideoCard";
import Header from "../Header/Header";

import styles from "./ResultContainer.styles";

const DATA = Array(10)
  .fill({
    id: 1,
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
  })
  .map((item, idx) => ({ ...item, id: idx }));

export default function ResultContainer() {
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={({ item }) => {
        return (
          <VideoCard
            thumbnailURI={item.thumbnail.static}
            length={item.length}
            channelThumbnailURI={item.channel.thumbnail}
            title={item.title}
            channelName={item.channel.name}
            views={item.views}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <Header />}
      stickyHeaderIndices={[0]}
    />
  );
}
