import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { selectLocation } from "../../redux/selectors";

const MapContainer = styled.View`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const location = useSelector(selectLocation);

  return (
    <MapContainer>
      <Map
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    </MapContainer>
  );
};
