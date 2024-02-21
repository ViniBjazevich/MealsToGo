import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/RestaurantCard";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

const restaurant = {
  id: "something",
  name: "Gemmas flip house",
  address: "69 Hood St, Culver City, CA",
  rating: 4.2,
  isOpenNow: true,
  isClosedTemporarily: true,
  photos: ["https://picsum.photos/700"],
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
};

const data = [restaurant, restaurant, restaurant, restaurant];

export const RestaurantScreen = () => {
  const user = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchBarContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        keyExtractor={(item, index) => index}
      />
    </>
  );
};
