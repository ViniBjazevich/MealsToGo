import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: purple;
  padding: 16px;
`;

export const RestaurantCard = () => {
  return (
    <Container>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};
