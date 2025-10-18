import { Stack } from "expo-router";

export default function(){

    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="WelcomePage" />
            <Stack.Screen name="Login"  options={{animation:"slide_from_right"}}/>
            <Stack.Screen name="Register" options={{animation:"slide_from_left"}}/>
        </Stack>
    )
}