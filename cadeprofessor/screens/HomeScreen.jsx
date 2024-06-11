import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConsultarVisoes from "./ConsultarVisoes";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {

  // const navigation = useNavigation();

  return (
    <ScrollView>
      <Header />
      <View style={styles.corpo}>
        <StatusBar backgroundColor="#058C42" />

        <View style={styles.containerBoasVindas}>
          <Text style={{ color: "white", fontStyle: "italic", fontSize: 25 }}>
            BEM-VINDO(A) AO APP Onde está o professor?
          </Text>
          <Text></Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Este projeto de aplicativo mobile está conectado com API e banco de
            dados, confira abaixo às informações disponíveis:
          </Text>
        </View>

        <Image
          source={require("../assets/tupileandrodeitado.jpeg")}
          style={styles.image}
        />
        <Text style={{ fontSize: 10, marginLeft: 57 }}>
          Prof. Leandro Grosso e Prof. Antônio Tupinambá
        </Text>

        <Text></Text>
        <Text></Text>

        <View style={styles.nav}>
          <Text style={{ color: "black", fontSize: 20 }}>
            Buscando os dados...
          </Text>

          <Text></Text>
          <Text></Text>

          <View style={styles.campoPressProf}>
            <View style={styles.campoProf}>
              <Text style={styles.textoCards}>Consulte os professores</Text>
              <Button
                title="Mais detalhes"
                onPress={() => navigation.navigate("ConsultarProfessores")}
                color="#AD6701"
              />
            </View>
          </View>

          <Text></Text>

          <View style={styles.campoPressSalas}>
            <View style={styles.campoSalas}>
              <Text style={styles.textoCards}>Consulte as salas</Text>
              <Button
                title="Mais detalhes"
                onPress={() => navigation.navigate("ConsultarSalas")}
                color="#01667B"
              />
            </View>
          </View>

          <Text></Text>

          <View style={styles.campoPressAlocacao}>
            <View style={styles.campoAlocacao}>
              <Text style={styles.textoCards}>Consulte as alocações</Text>
              <Button
                title="Mais detalhes"
                onPress={() => navigation.navigate("ConsultarAlocacoes")}
                color="#400048"
              />
            </View>
          </View>

          <Text></Text>

          <View style={styles.campoPressVisao}>
            <View style={styles.campoVisao}>
              <Text style={styles.textoCards}>Visão geral das alocações</Text>

              <Button
                color="#720101"
                title="Mais detalhes"
                onPress={() => navigation.navigate("ConsultarVisoes")}
              />
            </View>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  corpo: {
    margin: 10,
    padding: 10,
  },

  nav: {
    backgroundColor: "#E9E9E9",
    padding: 20,
  },

  containerBoasVindas: {
    backgroundColor: "#058C42",
    borderRadius: 20,
    padding: 25,
  },

  campoPressProf: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 30,
    backgroundColor: "#F18F01",
  },

  campoPressSalas: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 30,
    backgroundColor: "#048BA8",
  },

  campoPressAlocacao: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 30,
    backgroundColor: "#5F0B6A",
  },

  campoPressVisao: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 30,
    backgroundColor: "#A30000",
  },

  textoCards: {
    color: "white",
    fontSize: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 200,
    margin: 20,
    justifyContent: "center",
    borderRadius: 45,
  },
});
