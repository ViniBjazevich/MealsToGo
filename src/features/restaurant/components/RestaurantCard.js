import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import React from "react";

export const RestaurantCard = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "lightblue",
  },
});
