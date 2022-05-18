import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";

import styles from "./Search.styles";
import api from "../../services/api";
import {
  condenseViews,
  timeStringTransfrom,
  dateTimeAgo,
} from "../../services/Utils";
import DUMMY_DATA from "./DUMMY_DATA";

import SearchBar from "./SearchBar/SearchBar";
import EmptySearch from "./EmptySearch/EmptySearch";
import VideoCard from "./VideoCard/VideoCard";

function transformVideoData(input) {
  return input.items.map((item) => ({
    id: item.id,
    etag: item.etag,
    channelTitle: item.snippet.channelTitle,
    title: item.snippet.title,
    tumbnailURL: item.snippet.thumbnails.high.url,
    channelThumbnailURL: item.snippet.thumbnails.default.url,
    views: condenseViews(item.statistics.viewCount),
    duration: timeStringTransfrom(item.contentDetails.duration),
    publishedAt: dateTimeAgo(item.snippet.publishedAt),
  }));
}

export default function Search({ isPotrait }) {
  const [searchTerm, setSearchTerm] = useState();
  const [data, setData] = useState();
  const [paging, setPaging] = useState("false");
  const [nextPageToken, setNextPageToken] = useState();

  async function apiFetch(more = false) {
    if (searchTerm && searchTerm.length > 3) {
      if (more) setPaging(true);

      let searchEndPoint = `search?part=snippet&q=${searchTerm}&type=video`;
      if (nextPageToken) searchEndPoint += `&pageToken=${nextPageToken}`;

      await api
        .get(searchEndPoint)
        .then((res) => {
          setNextPageToken(res.data.nextPageToken);
          const videoIds = res.data.items.map((item) => item.id.videoId);
          api
            .get(
              `videos?part=snippet&part=statistics&part=contentDetails&id=${videoIds.join(
                ","
              )}`
            )
            .then((res) => {
              let newData = transformVideoData(res.data);
              if (more) setData([...data, ...newData]);
              else setData(newData);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));

      if (more) setPaging(false);
    }
  }

  useEffect(() => {
    setData(null);
    apiFetch();
  }, [searchTerm]);

  // useEffect(() => {
  //   async function delayedFetch() {
  //     await setTimeout(() => setData(transformVideoData(DUMMY_DATA)), 2000);
  //   }
  //   if (searchTerm) {
  //     setData(null);
  //     delayedFetch();
  //   }
  // }, [searchTerm]);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => {
        return (
          <VideoCard
            videoId={item.id}
            isPotrait={isPotrait}
            thumbnailURI={item.tumbnailURL}
            length={item.duration}
            channelThumbnailURI={item.channelThumbnailURL}
            title={item.title}
            channelName={item.channelTitle}
            views={item.views}
            publishDate={item.publishedAt}
          />
        );
      }}
      keyExtractor={(item, idx) => idx}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      ListHeaderComponent={() => (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={() => (
        <EmptySearch searchTerm={searchTerm} isPotrait={isPotrait} />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={() => apiFetch(true)}
      ListFooterComponent={() =>
        !paging && (
          <View style={styles.footer}>
            <ActivityIndicator size="large" color={"#188fff"} />
          </View>
        )
      }
    />
  );
}
