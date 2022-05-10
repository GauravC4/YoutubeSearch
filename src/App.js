import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Header from "./components/Header/Header";

import styles from "./App.styles";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
