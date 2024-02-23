import { View, Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const MapContainer = styled.View`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  return (
    <MapContainer>
      <Map />
    </MapContainer>
  );
};
