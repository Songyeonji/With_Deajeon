import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Detail, Exam, All, Festival, Food, House, Rest,DetailFe,DetailFood } from "../screens";
//import {DetailFood} from "../screens/DetailFile/";

import LogoTitle from "../screens/logo";
const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="All"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="House"
        component={House}
        options={{
          title: "House",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Rest"
        component={Rest}
        options={{
          title: "Rest",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Festival"
        component={Festival}
        options={{
          title: "Festival",
          headerTitleAlign: "left",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        options={{
          title: "Food",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
  <Stack.Screen
        name="DetailFe"
        component={DetailFe}
        options={{
          title: "상세페이지",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "상세페이지",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="DetailFood"
        component={DetailFood}
        options={{
          title: "상세페이지",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Exam"
        component={Exam}
        options={{
          title: "리스트페이지",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="All"
        component={All}
        options={{
          title: "메인페이지",
          headerBackTitleVisible: true,
          // headerBackTitle: "prev",
          headerTintColor: "#000000",
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
