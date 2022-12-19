import { FlatList, StyleSheet, Text, View, Button,  } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";



const Back = styled.View`
  // justifyContent:center;
 // alignItems: center;
 // border: 1px;
  //background-color:#ccc555;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  
`;
const Add = styled.Text`
  font-size: 13px;
  font-weight: light;
  
`;
const Images = styled.Image`

  width: 150px;
  height: 150px;
  border-radius: 20px;
  // resizeMode : 'contain'
  //border:1px;
  
`;
const HotCafe= ({ url, title,add }) => {
  return (
    <Back >
      <Images source={url}/>
      <View style={{margin:5}}>
      <Title >{title}</Title>
      
      </View>
      
      <View style={{marginLeft:5,width:130}}>
      <Add>{add}</Add>
      </View>
    </Back>
  );
};
export default HotCafe;
