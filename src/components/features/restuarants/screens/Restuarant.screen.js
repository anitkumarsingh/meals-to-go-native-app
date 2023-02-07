import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Search from "../../../SearchBar";

const RestuarantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <View style={styles.searchItem}>
        <Text>Search Items</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
  },
  searchItem: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default RestuarantScreen;
