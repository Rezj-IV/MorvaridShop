import { Tabs } from 'expo-router';
import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
;
import Ionicons from '@expo/vector-icons/Ionicons';
import AddItemButton from "../../components/AddItemButton"


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5F96E8",
        headerShown: false,
        animation: "fade",
        tabBarStyle: {
          backgroundColor: "#ffffffff",
          height: 58,
        },
        tabBarLabelStyle: {
          fontWeight: "bold"
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'خانه',

          tabBarIcon: ({ color, focused }) => focused ? <Ionicons name="home" size={23} color={color} /> : <Ionicons name="home-outline" size={23} color={color} />
        }}
      />

      <Tabs.Screen
        name="addItem"
        options={{
          tabBarButton: AddItemButton
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log('tabPress');
          }
        }}
      />
      <Tabs.Screen
        name="(accountNavigator)"
        options={{
          title: 'حساب کاربری',
          tabBarIcon: ({ color, focused }) => focused ? <FontAwesome name="user-circle" size={23} color={color} /> : <FontAwesome name="user-circle-o" size={23} color={color} />
        }}
      />


    </Tabs>
  );
}
