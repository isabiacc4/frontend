import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Página Inicial'}}
        />
        <Stack.Screen/>
        <Stack.Screen/>
        <Stack.Screen/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}