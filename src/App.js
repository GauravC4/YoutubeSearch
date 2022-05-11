import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Header from "./components/Header/Header";

import styles from "./App.styles";
import VideoCard from "./components/VideoCard/VideoCard";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header />
          <VideoCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
