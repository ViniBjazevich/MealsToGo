import { Card, Text } from "react-native-paper";
import { Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import starIcon from "../../../../assets/star.js";
import openIcon from "../../../../assets/openIcon.js";

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const InfoBar = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[2]};
`;

const IconContainer = styled.View`
  flex-direction: row;
  gap: ${(props) => props.theme.space[2]};
  align-items: center;
`;

const ClosedTemporarily = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: red;
`;

export const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    address,
    rating,
    isOpenNow,
    isClosedTemporarily,
    icon,
    photos,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <Container>
      <Card>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
          <InfoBar>
            <Rating>
              {ratingArray.map((i, index) => (
                <SvgXml xml={starIcon} width={20} height={20} key={index} />
              ))}
            </Rating>
            <IconContainer>
              {isClosedTemporarily && (
                <ClosedTemporarily>Closed Temporarily</ClosedTemporarily>
              )}
              {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
              <Image
                source={{
                  uri: icon,
                  width: 20,
                  height: 20,
                }}
              />
            </IconContainer>
          </InfoBar>
          <Address>{address}</Address>
        </Card.Content>
      </Card>
    </Container>
  );
};
