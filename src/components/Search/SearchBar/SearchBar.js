import React, { useState } from "react";

import { View, TextInput, TouchableOpacity } from "react-native";

import styles from "./SearchBar.styles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [searchText, setSearchText] = useState(searchTerm);

  function handleSearchClick() {
    setSearchTerm(searchText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Search"
        placeholderTextColor={"#c9c9c9"}
        style={styles.input}
        onSubmitEditing={handleSearchClick}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchClick}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={styles.faSearch}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};
