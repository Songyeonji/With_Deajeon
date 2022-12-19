import { FlatList, StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Back = styled.View`
  // justifyContent:center;
  alignItems: center;
  //border: 1px;
  //background-color:#ccc555;
  padding: 1px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: light;
`;
const Images = styled.Image`
  // border-radius:10px;
  width: 40px;
  height: 40px;
  // resizeMode : 'contain'
  //border:1px;
`;
const Icon = ({ url, title }) => {
  return (
    <Back>
      <Images source={url} />
      <Title>{title}</Title>
    </Back>
  );
};
export default Icon;
