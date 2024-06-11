import { View, Button, Text, FlatList, StyleSheet, StatusBar, ScrollView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScreen from './HomeScreen';
import { useState } from "react";


const API_URL = "http://10.136.37.13:3000/professor";

export default function ConsultarProfessor({ navigation }) {
  const [professores, setProfessores] = useState([]);
  const [error, setError] = useState(null);

  const fetchProf = async () => {
    try {
      const response = await fetch(`${API_URL}/professores_aloc`);
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(errorResponse);
      }
      const data = await response.json();
      setVisoes(data.professores);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar o(a) professor(a):", error);
      setError("Não foi possível buscar o(a) professor(a) desejado.");
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor='#F18F01' />
        <Text></Text>

        <Text style={{ margin: 16, padding: 30, fontSize: 15, borderRadius: 15 }}>
          Está página contém informações sobre os professores!
        </Text>

        <View>
          <Text></Text>
          <Text></Text>

          <Button title="Consultar professores" onPress={fetchProf} color='#F18F01' />

          <FlatList
            data={professores}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.prof}>
                <Text>ID: {item.prof_id}</Text>
                <Text>Nome do Professor: {item.prof_nome}</Text>
                <Text>Telefone: {item.prof_telefone}</Text>
              </View>
            )}
          />
        </View>
        <Text></Text>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}

        <Text></Text>
        <Text></Text>

        <Button
          title="Voltar para página inicial"
          onPress={() => navigation.navigate(HomeScreen)}
          color="#058C42"
        />

        <Text></Text>
        <Footer />

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
});
