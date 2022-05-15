import React from "react";

import styles from "./EmptySearch.styles";

import { Text, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import searchBarStyles from "../SearchBar/SearchBar.styles";

export default function EmptySearch({ isPotrait, searchTerm, loading }) {
  return (
    !searchTerm && (
      <View style={isPotrait ? styles.container : styles.ls_container}>
        <Text style={styles.text}>
          Type what you want to look for in search bar.
        </Text>
        <Text style={styles.text}>
          Then press &nbsp;&nbsp;{" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={searchBarStyles.faSearch}
            size={20}
          />
        </Text>
      </View>
    )
  );
  // (
  //   <View style={isPotrait ? styles.container : styles.ls_container}>
  //     <Text style={styles.text}>
  //       Opps did not found what you were looking for !
  //     </Text>
  //     <Text style={styles.text}>Try another search term.</Text>
  //   </View>
  // );
}
