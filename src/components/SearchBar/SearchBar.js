import React, { useState } from "react";

import { View, TextInput, Pressable } from "react-native";

import styles from "./SearchBar.styles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search"
        placeholderTextColor={"#c9c9c9"}
        style={styles.input}
      />
      <Pressable style={styles.button}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={styles.faSearch}
          size={20}
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;
