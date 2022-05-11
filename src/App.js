import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Header from "./components/Header/Header";

import styles from "./App.styles";
import ResultContainer from "./components/ResultContainer/ResultContainer";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <ResultContainer />
      </View>
    </SafeAreaView>
  );
};

export default App;
