import React from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./App.styles";

import Search from "./components/Search/Search";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search />
      </View>
    </SafeAreaView>
  );
};

export default App;
