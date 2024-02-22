import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  padding-top: ${StatusBar.currentHeight}px;
`;
