import { StyleSheet, Text, View } from "react-native";
import _colors from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/Button";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import onboardingScreens from "../../constants/onboarding";

const WelcomePage = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.main_container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.active_dot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboardingScreens.map((screen) => (
          <View style={styles.container}>
            <View style={{ gap: 10 }}>
              <Text style={styles.heading}>{screen.title}</Text>
              <Text style={styles.caption}>{screen.caption}</Text>
            </View>
            <View style={{ gap: 20 }}>
              <View style={{ gap: 10 }}></View>
            </View>
          </View>
        ))}
      </Swiper>
      {activeIndex === 2 ? (
        <CustomButton
          text="Continue"
          h={60}
          w="75%"
          color={_colors.button_primary}
          onPress={() => {
            router.replace("/(auth)/sign-in");
          }}
        />
      ) : (
        <CustomButton
          text="Skip"
          h={60}
          w="75%"
          color={_colors.button_secondary}
          onPress={() => {
            router.replace("/(auth)/sign-in");
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: _colors.login_main,
    flex: 1,
    alignItems: "center",
    paddingBottom: 100,
  },
  container: {
    paddingTop: "30%",
    paddingLeft: "12%",
    paddingRight: "12%",
    paddingBottom: "40%",
    flex: 1,
    justifyContent: "space-between",
  },
  heading: {
    color: _colors.text_primary,
    fontWeight: "bold",
    fontSize: 60,

    lineHeight: 55,
  },
  caption: {
    color: _colors.text_primary,

    fontSize: 20,
  },
  dot: {
    width: 32,
    height: 4,
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: _colors.text_primary,
  },
  active_dot: {
    width: 32,
    height: 4,
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: _colors.text_primary,
  },
});
