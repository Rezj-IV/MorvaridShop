

import { Stack } from "expo-router";

export default function accountNavigato_Layout() {
  return (
    <Stack>
      <Stack.Screen name="account" options={{headerShown:false}} />
      <Stack.Screen name="myListings"options={{title:"کالا های من" , animation:"slide_from_left", headerTitleAlign:"center" , headerTintColor:"#5F96E8" , headerTitleStyle:{color:"black"}}} />
      <Stack.Screen name="myMessages" />
    </Stack>
  );
}
