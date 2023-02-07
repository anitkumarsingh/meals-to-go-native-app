import { View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View>
      <Searchbar
        placeholder="Search something..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default Search;
