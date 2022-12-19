import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";
//import PropTypes from 'prop-types';
import styled from "styled-components/native";
const Separator = () => <View style={styles.separator} />;
const Back = styled.View`
  margin: 1px 1px;
  flexDirection: row;
  justifyContent: space-around;
  padding: 15px;
`;
const Image = styled.Image`
  border-radius: 10px;
  width: 40%;
  height: 120px;
 // border: 1px;
  margin-right: 5px;
`;
const Read = styled.View`
  width: 60%;
  height: 120px;
  padding: 12px;
  justifyContent: space-between;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

//옵션에 넣을 내용
const Box = ({ title, url, text, add }) => {
  return (
    <View>
      <Back>
        <Image source={{ uri: url }} />
        <Read>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <Text style={styles.tail}>{add}</Text>
        </Read>
      </Back>
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  tial: {},
  separator: {
    marginVertical: 3,
    borderBottomColor: "#737373",
    borderBottomWidth: 1,
    margin:10,
  },
});
export default Box;
