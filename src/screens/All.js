import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { Image } from "../components";
import { images } from "../utils/images";
import Icon from "../components/Icon";
import Cafee from "../components/HotCafe";


import cafe from "./icon/Icon-21.png";
import tower from "./icon/Icon-22.png";
import party from "./icon/Icon-23.png";
import dinner from "./icon/Icon-24.png";
import hotel from "./icon/Icon-25.png";
import tashu from "./icon/Icon-20.png";

import Cafe1 from "../../assets/images/oasis.png";
import Cafe2 from "../../assets/images/byeot.png";
import Cafe3 from "../../assets/images/chunggg.png";
import Cafe4 from "../../assets/images/pung.png";
import Cafe5 from "../../assets/images/yanggaeng.png";


import Bicy from "./Bicy";
import * as Font from "expo-font";

import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,

} from "react-native";
import { Alert, Linking } from "react-native"; //외부 연결

const supportedURL ="https://play.google.com/store/apps/details?id=kr.or.newtashu.app&hl=ko&gl=US";
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {await Linking.openURL(url);} 
    else {Alert.alert(`Don't know how to open this URL: ${url}`);}
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const Separator = () => <View style={styles.separator} />;
const Header = styled.View`
  flexDirection: row;
  justifycontent: space-between;
  //  alignItems:center;
  // height: 240px;
  border: 1px;
  paddingtop: 30px;
`;

const Contents = styled.View`
  flexDirection: row;
  justifycontent: space-around;
  border-radius: 15px;
  background-color: white;
  padding: 30px 30px 20px;
  // border: 1px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: light;
  padding: 18px;
`;
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
 
  separator: {
    marginVertical: 2,
    borderBottomColor: "#8888",
    borderBottomWidth: 7,
  },

  weather: {
    flex: 1,
  },
  weatherText: {
    marginTop: 40,
    marginLeft: 15,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "BMEuljiro",
  },
  dayText2: {
    marginTop: 8,
  },
 
  button: {
    marginTop: 20,
    borderRadius: 15,
    flex: 1,
    resizeMode: "contain",
  },

  HotCafeText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
 

  Tashu: {
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(235, 206, 147, 0.603)",
    width:395,

  },
  Imagebutton: {
    width: "100px",
  },
});

const All = ({ navigation }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  return (
    <SafeAreaView>
      <Image url={images.logo} style={styles.sub} />
     
     
      <View style={{ height: 190,  }}>
        <View style={styles.weatherText}>
          <Text style={styles.dayText}>대전이랑 </Text>
          <Text style={styles.dayText}>함께하기</Text>
          <Text style={styles.dayText}>좋은 날씨입니다.</Text>
          <Text style={styles.dayText2}>{formatted}</Text>
        </View>
      </View>



      <Contents style={{ justifyContent: "space-evenly" }} title="목록">
        <TouchableOpacity onPress={() => navigation.navigate("Exam")}>
          <Icon url={cafe} title="카페" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Food")}>
          <Icon url={dinner} title="식사" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Rest")}>
          <Icon url={tower} title="관광지" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Festival")}>
          <Icon url={party} title="축제" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("House")}>
          <Icon url={hotel} title="숙소" />
        </TouchableOpacity>
      </Contents>

      <Separator />

      <View >
        <Text style={styles.HotCafeText}>대전 핫플 카페</Text>
        <ScrollView style={{height:240}} horizontal={true}>
          <OpenURLButton url="https://map.naver.com/v5/search/%EB%8C%80%EC%A0%84%20%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4/place/1868879802?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true">
            <Cafee url={Cafe1} title="오아시스" add="대전광역시 동구 소제동 299-213"/>
          </OpenURLButton>

          <OpenURLButton url={supportedURL}>
           <Cafee url={Cafe2} title="풍뉴가" add="대전광역시 동구 소제동 299-73"/>
           </OpenURLButton>
          
           <OpenURLButton url={supportedURL}>
           <Cafee url={Cafe3} title="층층층" add="대전광역시 동구 소제동 수향길 101" />
           </OpenURLButton>
           
           <OpenURLButton url="https://map.naver.com/v5/entry/place/1147872802?c=14185399.3950450,4346696.4494066,15,0,0,0,dh">
           <Cafee url={Cafe4} title="양갱갱갱" add="대전광역시 동구 중앙동 수향1길 12"/>
           </OpenURLButton>
           
           <OpenURLButton url={supportedURL}>
           <Cafee url={Cafe5} title="별" add="대전광역시 동구 수향    2길 7" />
           </OpenURLButton>

        </ScrollView>
      
      </View>


<View>
    <OpenURLButton url={supportedURL}>
      <View style={styles.Tashu}>
        
          <View style={{ alignItems:"center", flexDirection: "row" }}>
            <Bicy url={tashu} />
          
            <Title>
              리뉴얼된{" "}
              <Text style={{ color: "blue", fontWeight: "bold" }}>타슈 </Text>
              시즌 2
            </Title>
          </View>
       
      </View>
    </OpenURLButton>
      
      </View>
    </SafeAreaView>
  );
};
export default All;
