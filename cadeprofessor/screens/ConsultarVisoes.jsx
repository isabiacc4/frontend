import { View, Button, Text, FlatList, StyleSheet } from "react-native";
import HomeScreen from './HomeScreen';


// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.37.13:3000/visao"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function ConsultarVisoes({ navigation }) {
  const [visoes, setVisoes] = useState([]);
  const [error, setError] = useState(null);

  // Função para buscar todos os produtos na API
  const fetchAllVisoes = async () => {
    try {
      const response = await fetch(`${API_URL}/visao_aloc`); // Faz a requisição GET para a API
      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a resposta
      }
      const data = await response.json(); // Converte a resposta para JSON
      setVisoes(data.visoes); // Atualiza o estado com a lista de produtos
      setError(null); // Reseta o estado de erro
    } catch (error) {
      console.error("Erro ao buscar a visão geral das alocações:", error); // Loga o erro no console
      setError("Não foi possível buscar a visão geral das alocações."); // Define a mensagem de erro
    }
  };

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor='#720101' />

      <Text style={{ margin: 16, padding: 30, fontSize: 15, borderRadius: 15 }}>
        Está página contém informações sobre as visões gerais!
      </Text>

      {/* Botão para buscar todos os produtos */}
      <Button title="Listar todas as visões gerais" onPress={fetchAllVisoes} />
      {visoes.length > 0 && (
        <FlatList
          data={visoes} // Dados da lista de produtos
          keyExtractor={(item) => item.id.toString()} // Função para extrair a chave de cada item
          renderItem={({ item }) => (
            <View style={styles.visao}>
              <Text>Nome do Professor: {item.prof_nome}</Text>
              <Text>Nome da Sala: {item.sala_nome}</Text>
              <Text>Bloco: {item.sala_bloco}</Text>
              <Text>Horários do professor: {item.dia_semana}</Text>
              <Text>Período: {item.periodo}</Text>
            </View>
          )}
        />
      )}
      {/* Exibe a mensagem de erro, se existir */}
      {error && <Text>{error}</Text>}



      <Text></Text>
      <Footer />

    </View>
  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
});
