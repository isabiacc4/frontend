import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header'
import Footer from "../components/Footer";

const API_URL = "http://172.18.16.1:3000/Sala";

export default function ConsultarSala() {
    const fetchSalas = async () => {
        try {
            const response = await fetch(`${API_URL}/sala_aloc`);
            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(errorResponse);
            }
            const data = await response.json();
            setVisoes(data.salas);
            setError(null);
        } catch (error) {
            console.error("Erro ao buscar a sala:", error);
            setError("Não foi possível buscar a sala desejada.");
        }
    };


    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>Consulte a sala:</Text>

            <Text>Está página contem informações sobre as salas que você deseja, por favor, insira o id no campo abaixo.</Text>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="digite aqui o id da sala"
                    keyboardType="numeric"
                />
                <Button title="Consultar sala" onPress={fetchSalas} />

                <FlatList
                    data={salas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.salas}>
                            <Text>Nome da sala: {item.sala_id}</Text>


                        </View>
                    )}
                />

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
