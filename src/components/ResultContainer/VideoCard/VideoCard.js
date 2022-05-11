import React from "react";

import { View, Image, Text } from "react-native";

import styles from "./VideoCard.styles";

export default function VideoCard({
  thumbnailURI,
  length,
  channelThumbnailURI,
  title,
  channelName,
  views,
  publishDate,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: thumbnailURI }} style={styles.img} />
        <View style={styles.lengthContainer}>
          <Text style={styles.length}>{length}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.channelThumbnailContainer}>
          <Image
            source={{ uri: channelThumbnailURI }}
            style={styles.channelThumbnail}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.channelStatsContainer}>
            <Text style={styles.channelStats}>{channelName}</Text>
            <Text style={styles.channelStats}>{views} views</Text>
            <Text style={styles.channelStats}>{publishDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
