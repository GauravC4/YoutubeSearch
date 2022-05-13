import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Dimensions } from "react-native";

import styles from "./App.styles";

import Search from "./components/Search/Search";

const App = () => {
  const [isPotrait, setIsPotrait] = useState(
    Dimensions.get("screen").width < Dimensions.get("screen").height
  );

  useEffect(() => {
    const orientationChangeEvent = Dimensions.addEventListener(
      "change",
      (res) => setIsPotrait(res.screen.width < res.screen.height)
    );
    return () => {
      orientationChangeEvent.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search isPotrait={isPotrait} />
      </View>
    </SafeAreaView>
  );
};

export default App;
