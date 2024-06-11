import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConsultarVisoes from "./screens/Visao";
import ConsultarProfessor from './screens/Professores'
import ConsultarSalas from './screens/Salas'
import ConsultarAlocacoes from './screens/Alocacoes'

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen
          name="Visão Geral"
          component={ConsultarVisoes}
          options={{ title: "Consultar Visão Geral" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
