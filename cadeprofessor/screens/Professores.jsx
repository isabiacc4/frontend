import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScreen from './HomeScreen';


const API_URL = "http://10.136.37.13:3000/professor";

export default function ConsultarProfessor({ navigation }) {

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
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />
      <Header />

      <Text style={styles.title}>Consulte o(a) professor(a):</Text>

      <Text>
        Está página contem informações sobre o professor que você deseja, por
        favor, insira o id no campo abaixo.
      </Text>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="digite aqui o id do professor"
          keyboardType="numeric"
        />
        <Button title="Consultar professor(a)" onPress={fetchProf} />

        <FlatList
          data={professor}
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

      <Button
        title="Voltar para página inicial"
        onPress={() => navigation.navigate(HomeScreen)}
        color="#058C42"
      />
      <Text></Text>
      <Footer />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
});
