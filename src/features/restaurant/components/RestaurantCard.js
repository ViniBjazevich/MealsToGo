import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Description = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantCard = () => {
  return (
    <Container>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Title>Title</Title>
          <Description>Description</Description>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};
