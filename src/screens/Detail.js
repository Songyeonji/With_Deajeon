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
import { Image } from "../components";
import { images } from "../utils/images";

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
    borderWidth:1,
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
    borderBottomWidth: 5,
  },

});

const Detail = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image url={route.params.img} />
      <View style={styles.backg}>
        <View style={{ padding: 30 }}>
          <Text style={styles.title}>{route.params.id}</Text>
          {/* EXAM가서 파라미터 가져오기 설정해주기 */}

          <Separator />
          <Text style={{ padding: 5 }}>추천 메뉴: {route.params.food}</Text>
          <Text style={{ padding: 5 }}>{route.params.call}</Text>
          <Text style={{ padding: 5 }}>{route.params.add}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Detail;
