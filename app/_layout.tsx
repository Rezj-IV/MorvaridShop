
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [token, setToken] = useState()

  const CheckStatus = async () => {
    const jwtToken = await AsyncStorage.getItem("jwtToken")

    if (jwtToken) {
      console.log(jwtToken);
      setToken(JSON.parse(jwtToken))
    }
  }
  useEffect(() => {
    CheckStatus()
  }, [token])
  return (
    <>

      <Stack screenOptions={{ headerShown: false }}>

     
        <Stack.Screen name="(tabs)" />   <Stack.Screen name="(welcome)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />

    </>
  );
}
