import { Text, Image, Statusbar, View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logofooter1.png")}
        style={{ width: 200, height: 50 }}
      ></Image>

      <Text></Text>

      <View>
        <Text style={{ color: 'white', fontWeight: 'bold'}}>Curso Técnico de Desenvolvimento de Sistemas</Text>
      </View>
      <Text></Text>

      <Image
        source={require("../assets/logofooter2.png")}
        style={{ width: 80, height: 80 }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#353B3C",
    padding: 20,
    color: "white",
    display: "flex",
  },
});


export default Footer;