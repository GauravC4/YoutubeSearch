import React from "react";

import { View, Image, Text } from "react-native";

import styles from "./VideoCard.styles";

import { condenseViews } from "../../../services/Utils";

export default function VideoCard({
  isPotrait,
  thumbnailURI,
  length,
  channelThumbnailURI,
  title,
  channelName,
  views,
  publishDate,
}) {
  function getOrientStyle(classname) {
    return isPotrait ? styles[classname] : styles["ls_" + classname];
  }

  return (
    <View style={getOrientStyle("container")}>
      <View style={getOrientStyle("thumbnailContainer")}>
        <Image source={{ uri: thumbnailURI }} style={styles.img} />
        <View style={styles.lengthContainer}>
          <Text style={styles.length}>{length}</Text>
        </View>
      </View>
      <View style={getOrientStyle("footer")}>
        <View style={getOrientStyle("channelThumbnailContainer")}>
          <Image
            source={{ uri: channelThumbnailURI }}
            style={styles.channelThumbnail}
          />
        </View>
        <View style={getOrientStyle("details")}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.channelStatsContainer}>
            <Text style={styles.channelStats}>{channelName}</Text>
            <Text style={styles.channelStats}>
              {condenseViews(views)} views
            </Text>
            <Text style={styles.channelStats}>{publishDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
