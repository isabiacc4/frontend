import { Text, Image, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logoheader.png")}
        style={{ width: 80, height: 80 }}
      />

      <View>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25}}>Onde está o professor?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#353B3C',
    padding: 20,
  },
});

export default Header;
