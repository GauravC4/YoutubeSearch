import React from "react";
import { View } from "react-native";

import SearchBar from "./SearchBar/SearchBar";

import styles from "./Header.styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}