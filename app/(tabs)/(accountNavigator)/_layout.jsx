

import { Stack } from "expo-router";

export default function accountNavigato_Layout() {
  return (
    <Stack>
      <Stack.Screen name="account" options={{headerShown:false}} />
      <Stack.Screen name="myListings" />
      <Stack.Screen name="myMessages" />
    </Stack>
  );
}
