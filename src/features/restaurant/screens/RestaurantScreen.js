import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import { SafeArea } from "../../../components/SafeArea";
import styled from "styled-components/native";

const SearchBarContainer = styled.View`
  background-color: lightgrey;
  padding: 16px;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchBarContainer>
      <RestaurantCard />
    </SafeArea>
  );
};
