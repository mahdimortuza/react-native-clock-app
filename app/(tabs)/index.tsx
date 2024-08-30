import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter-Regular" }}>Inter</Text>
      <Text style={{ fontFamily: "Inter-Bold" }}>Inter Bold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
