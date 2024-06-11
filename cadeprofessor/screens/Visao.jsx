import { View, Button, Text, FlatList, StyleSheet } from "react-native";

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.35.33:3000/api"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function ConsultarVisoes() {
  // Função para buscar todos os produtos na API
  const fetchAllVisoes = async () => {
    try {
      const response = await fetch($`{API_URL}/visao_aloc`); // Faz a requisição GET para a API
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
      {/* Botão para buscar um produto específico */}
      {/* Botão para buscar todos os produtos */}
      <Button title="Listar todas as visões gerais" onPress={fetchAllVisoes} />
      {visoes.length > 0 && (
        <FlatList
          data={visoes} // Dados da lista de produtos
          keyExtractor={(item) => item.id.toString()} // Função para extrair a chave de cada item
          renderItem={({ item }) => (
            <View style={styles.visao}>
              <Text>Nome do Professor: {item.nome_professor}</Text>
              <Text>Nome da Sala: {item.nomesala}</Text>
              <Text>Bloco: {item.bloco}</Text>
              <Text>Horários do professor: {item.dia_semana}</Text>
              <Text>Período: {item.periodo}</Text>
            </View>
          )}
        />
      )}
      {/* Exibe a mensagem de erro, se existir */}
      {error && <Text>{error}</Text>}
    </View>
  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
});
