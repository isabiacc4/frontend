import { Text, image, Statusbar, View, StyleSheet } from 'react-native';

const Header = () => {
    return(

        <View style={styles.container}>
    
        <Image
            source={require("../assets/logoheader.png")}
            style={{ width: 50, height: 50 }}>
        </Image>

        <View>
        <Text>Onde está o professor?</Text>
        </View>
   

   
    </View >
       
    )}
    
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
})



export default Header;