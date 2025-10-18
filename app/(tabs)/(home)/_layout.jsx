import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <>
            <Stack screenOptions={{ presentation: 'formSheet', headerShown: false}}>
                <Stack.Screen name="index" />
                <Stack.Screen name="product" />
        
            </Stack>
        </>
    );
}