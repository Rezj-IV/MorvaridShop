import { Stack } from "expo-router";

export default function(){

    return(
        <Stack screenOptions={{headerShown:false , animation:"fade_from_bottom"}}>
            <Stack.Screen name="WelcomePage" />
            <Stack.Screen name="Login" />
            <Stack.Screen name="Register"/>
        </Stack>
    )
}