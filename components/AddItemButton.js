import { TouchableOpacity, StyleSheet, Alert, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
const AddItemButton = () => {
      const router = useRouter()


  const handlePress = () => {
    router.push("/addItem")
  };
  return (
    <Pressable style={styles.buttonContainer} onPress={handlePress}>
      <AntDesign name="pluscircle" size={26} color="white" />
    </Pressable>
  );
};

export default AddItemButton;

const styles = StyleSheet.create({
  buttonContainer: {
 		position: 'absolute',
		top: -20,
		left: '55%',
		transform: [{ translateX: -40 }],
		backgroundColor: '#ed424aff',
		borderRadius: "50%",
		width: 65,
		height: 65,
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
    ,borderColor:"#F4F4F2",
    borderWidth:4
  },
});
