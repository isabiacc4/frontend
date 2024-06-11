import { Text, Image, View, StyleSheet } from 'react-native';

const Header = () => {
    return(

        <View style = { styles.container } >
    
        <Image
            source={require("../assets/logoheader.png")}
            style={{ width: 100, height: 100 }}>
        </Image>

        <View>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Onde está o professor?</Text>
        </View>

   
    </View >
       
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: '#242222',
        flexDirection: 'row',
        padding: 35,
    },
})


export default Header;