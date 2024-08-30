import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            color: "#303030",
            fontSize: 20,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  const [showMore, setShowMore] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require(`@/assets/images/light-bg.png`)}
      style={{ flex: 1 }}
    >
      {/* parent view  */}
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 30,
          paddingHorizontal: 26,
        }}
      >
        {/* upper portion  */}
        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                Science is a systematic enterprise that builds and organizes
                knowledge in the form of testable explanations and predictions
                about the universe.
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 12,
                  color: "#fff",
                  marginTop: 8,
                }}
              >
                - Ada Lovelace
              </Text>
            </View>
            <Image source={require(`@/assets/images/refresh.png`)} />
          </View>
        )}

        {/* bottom portion  */}
        <View style={{ marginBottom: 36 }}>
          {/* greeting test  */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("@/assets/images/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 15,
                color: "#fff",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              GOOD MORNING
            </Text>
          </View>

          {/* time  */}
          <View style={{ marginTop: 8 }}>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 100,
                  color: "#fff",
                }}
              >
                11:37
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                VST
              </Text>
            </Text>
          </View>

          {/* location  */}
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 16,
                color: "#fff",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          {/* button  */}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {showMore ? "LESS" : "MORE"}
            </Text>
            <Image
              source={
                showMore
                  ? require(`@/assets/images/arrow-up.png`)
                  : require(`@/assets/images/arrow-down.png`)
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* extended view  */}
      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"Current Timezone"} value={"Europe/London"} />
          <RowView label={"Day of the Year"} value={"295"} />
          <RowView label={"Day of the Week"} value={" 5"} />
          <RowView label={"Week Number"} value={"42"} />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
