import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header'
import Footer from "../components/Footer";
import HomeScreen from './HomeScreen';

const API_URL = "http://10.136.37.13:3000/alocacao";

export default function ConsultarAlocacoes({ navigation }) {
    const fetchAlocacao = async () => {
        try {
            const response = await fetch(`${API_URL}/alocacao_aloc`);
            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(errorResponse);
            }
            const data = await response.json();
            setVisoes(data.alocacoes);
            setError(null);
        } catch (error) {
            console.error("Erro ao buscar a alocação:", error);
            setError("Não foi possível buscar a alocação desejada.");
        }
    };


    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>Consulte a alocação:</Text>

            <Text>Está página contem informações sobre as alocações que você deseja, por favor, insira o id no campo abaixo.</Text>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="digite aqui o id da alocação"
                    keyboardType="numeric"
                />
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

                <Button
                    title="Voltar para página inicial"
                    onPress={() => navigation.navigate('HomeScreen')}
                    color="#058C42"
                />
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