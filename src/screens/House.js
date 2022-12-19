
 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   FlatList
 } from 'react-native';
 import styled from "styled-components/native";

 import { TouchableOpacity } from "react-native";
 import Box from "../components/Box";
 import axios from 'axios';

// import { withNavigation } from 'react-navigation';


const Separator = () => <View style={styles.separator} />;
const Header = styled.View`
  flexDirection: row;
  justifyContent: space-around;

  background-color: #fffff;
  padding: 20px 3px;
`;
const Kind = styled.TouchableOpacity`
  background-color: #00cc66;
  justifycontent: center;

  padding: 10px 15px;
  border-radius: 30px;
`; //border:3px; border-color:#787878;


 export default class festival extends React.Component
 {
   constructor(){
     super();
     this.state = {
       data:[]
     };
     
   }
 
   componentDidMount(){
     axios.get('http://43.201.63.84:8000/rest/')
     .then((res)=>{
       this.setState({data:res.data})
     })
     .catch((e)=>
     {
       console.log(e)
     })
   }
   _renderItem = ({item}) => {
     return(
      <TouchableOpacity 
                  onPress={() =>
                    this.props.navigation.navigate("Detail", { id: item.title,
                      img:item.img_url ,
                      call:item.call,
                      add:item.address,
                  introduce:item.introducing})
                  }
                 
                >
                  <Box
                    title={item.title}
                    url={item.img_url}
                    text={item.call}
                    add={item.address}
                  
                  />
                </TouchableOpacity>
     )
  }
  
   render()
   {
     const { data } = this.state;
     return (
       <SafeAreaView>
          <Header>
          <Kind onPress={() => this.props.navigation.navigate("Exam")}>
            <Text style={styles.font}>카페</Text>
          </Kind>
          <Kind onPress={() => this.props.navigation.navigate("Food")}>
            <Text style={styles.font}>식사</Text>
          </Kind>
          <Kind onPress={() => this.props.navigation.navigate("Rest")}>
            <Text style={styles.font}>관광지</Text>
          </Kind>
          <Kind onPress={() => this.props.navigation.navigate("Festival")}>
            <Text style={styles.font}>축제</Text>
          </Kind>
          <Kind onPress={() => this.props.navigation.navigate("House")}>
            <Text style={styles.font}>숙소</Text>
          </Kind>

        </Header>
         <FlatList
         style={{backgroundColor:'#f5f5f5', padding:5 }}
            data={data}
            numColumns={1}
            keyExtractor={(item) =>item.id}
            renderItem={this._renderItem}
         />
       </SafeAreaView>
     )
   }
 };
 const styles = StyleSheet.create({
  f: { flex: 1, height: 150, color: "#000000" },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },

  llist: {
    margin: 0,
  },
  font: {
    fontSize: 20,
    color: "#ffffff",
  },

  separator: {
    marginVertical: 2,
    borderBottomColor: "#787878",
    borderBottomWidth: 3,
  },
});