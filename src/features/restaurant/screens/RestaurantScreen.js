import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import { SafeArea } from "../../../components/SafeArea";
import styled from "styled-components/native";

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
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
