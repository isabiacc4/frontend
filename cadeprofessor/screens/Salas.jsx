import { View, Button, Text, FlatList, StyleSheet, StatusBar } from 'react-native';

import Footer from "../components/Footer";

import { useState } from 'react';


const API_URL = "http://10.136.37.13:3000/sala";

export default function ConsultarSala({ navigation }) {
    const [salas, setSalas] = useState([]);
    const [error, setError] = useState(null);


    const fetchSalas = async () => {
        try {
            const response = await fetch(`${API_URL}/sala`);
            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(errorResponse);
            }
            const data = await response.json();
            setSalas(data);
            setError(null);
        } catch (error) {
            console.error("Erro ao buscar a sala:", error);
            setError("Não foi possível buscar a sala desejada.");
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#01667B' />

            <Text></Text>
            <Text style={{ margin: 16, padding: 30, fontSize: 15, borderRadius: 15 }}>Está página contem informações sobre as salas que você deseja</Text>
            <Text></Text>

            <View>

                <Button title="Consultar sala" onPress={fetchSalas} color='#01667B' />

                <Text></Text>

                <FlatList
                    data={salas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.salas}>
                            <Text>ID da Sala: {item.sala_id}</Text>
                            <Text>Nome da sala: {item.sala_nome}</Text>
                            <Text>Bloco da Sala: {item.sala_bloco}</Text>
                        </View>

                    )}
                />
                {error && <Text style={{ color: 'red' }}>{error}</Text>}


            </View>
            <Text></Text>


            <Text></Text>
            <Footer />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível

    },

});
