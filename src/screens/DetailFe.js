import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Image ,Poster} from "../components";
import { images } from "../utils/images";
import { TouchableOpacity } from "react-native-gesture-handler";

// const Container = styled.Vie
const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  backg: {
    height: "60%",
    width: "90%", //여기 수정
    backgroundColor: "#ffffff",
    borderRadius: 20,
    margin: 20, //여기 수정
    background: '#ffffff' ,// 배경색이 없으면 그림자가 안보일 수 있음.
    elevation: 5,
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.3,//그림자 투명도
    shadowOffset: { width: 2, height: 2 }, 
  },
  container: {
    // justifyContent : "center",
    // flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "1100",
    padding: 3,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#787878",
    borderBottomWidth: 3,
  },

});

const DetailFood = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
     
      <Poster url={route.params.img} />
    <TouchableOpacity
    ><Text>{route.params.title}</Text></TouchableOpacity>

    </SafeAreaView>
  );
};
export default DetailFood;
