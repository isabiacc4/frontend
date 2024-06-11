import { View, Button, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import Footer from "../components/Footer";


const API_URL = "http://10.136.37.13:3000/alocacao";

export default function ConsultarAlocacoes({ navigation }) {
    const [alocacoes, setAlocacoes] = useState([]);
    const [error, setError] = useState(null);

    const fetchAlocacao = async () => {
        try {
            const response = await fetch(`${API_URL}/alocacao`);
            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(errorResponse);
            }
            const data = await response.json();
            setAlocacoes(data);
            setError(null);
        } catch (error) {
            console.error("Erro ao buscar a alocação:", error);
            setError("Não foi possível buscar a alocação desejada.");
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#400048' />



            <Text style={{ margin: 16, padding: 30, fontSize: 15, borderRadius: 15 }}>Está página contém informações sobre as alocações que você deseja</Text>

            <View>

                <Button title="Consultar alocação" onPress={fetchAlocacao} />

                <FlatList
                    data={alocacoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.alocacoes}>
                            <Text>Nome da alocação: {item.id}</Text>


                        </View>
                    )}
                />

                <Text></Text>
                <Text></Text>


                <Text></Text>

            </View>
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