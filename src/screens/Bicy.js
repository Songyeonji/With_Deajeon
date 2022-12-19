import { FlatList, StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Back = styled.View`
  justifyContent: center;
  alignItems: center;

`;

const Images = styled.Image`
//   border-radius: 10px;
  width: 35px;
  height: 35px;
  resizemode: contain;
  //border:1px;
`;
const Bicy = ({ url }) => {
  return (
    <Back>
      <Images source={url} />
    </Back>
  );
};

export default Bicy;
