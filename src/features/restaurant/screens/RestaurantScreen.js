import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import { SafeArea } from "../../../components/SafeArea";
import styled from "styled-components/native";

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

const restaurant = {
  name: "Gemmas flip house",
  address: "69 Hood St, Culver City, CA",
  rating: 4.2,
  isOpenNow: true,
  isClosedTemporarily: true,
  photos: ["https://picsum.photos/700"],
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
};

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
      <RestaurantCard restaurant={restaurant} />
    </SafeArea>
  );
};
