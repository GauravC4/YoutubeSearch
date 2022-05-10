import React from "react";
import { View } from "react-native";

import SearchBar from "../SearchBar/SearchBar";

import styles from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

export default Header;
