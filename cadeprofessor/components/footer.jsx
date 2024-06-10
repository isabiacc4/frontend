import { Text, Image, View, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logofooter1.png")}
        style={{ width: 50, height: 50 }}
      ></Image>

      <View>
        <Text>Curso Técnico de Desenvolvimento de Sistemas</Text>
      </View>

      <Image
        source={require("../assets/logofooter2.png")}
        style={{ width: 50, height: 50 }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Footer;
