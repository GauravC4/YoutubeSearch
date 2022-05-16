import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

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
    tumbnailURL: item.snippet.thumbnails.medium.url,
    channelThumbnailURL: item.snippet.thumbnails.default.url,
    views: condenseViews(item.statistics.viewCount),
    duration: timeStringTransfrom(item.contentDetails.duration),
    publishedAt: dateTimeAgo(item.snippet.publishedAt),
  }));
}

export default function Search({ isPotrait }) {
  const [searchTerm, setSearchTerm] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState("false");
  const [nextPageToken, setNextPageToken] = useState();

  async function apiFetch(more = false) {
    if (searchTerm && searchTerm.length > 3) {
      setLoading(true);

      let searchEndPoint = `search?part=snippet&q=${searchTerm}&type=video`;
      if (nextPageToken) searchEndPoint += `&pageToken=${nextPageToken}`;

      api
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

      setLoading(false);
    }
  }

  useEffect(() => {
    apiFetch();
  }, [searchTerm]);

  // useEffect(() => {
  //   setData(transformVideoData(DUMMY_DATA));
  // }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => {
        return (
          <VideoCard
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
        <EmptySearch
          searchTerm={searchTerm}
          isPotrait={isPotrait}
          loading={loading}
        />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={() => apiFetch(true)}
    />
  );
}
