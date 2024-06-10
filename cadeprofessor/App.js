import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextComponent,
} from "react-native";
import { useState, useEffect } from "react";

// const API_URL = "<http://10.136.42.89:3000/api>";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.corpo}>
        <StatusBar backgroundColor="#058C42" />

        {/* container titulo prop */}

        <View style={styles.containerBoasVindas}>
          <Text style={{ color: "white", fontStyle: "italic", fontSize: 25 }}>
            BEM-VINDO(A) AO APP Onde está o professor?
          </Text>
          <Text></Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Confira abaixo às informações disponíveis:{" "}
          </Text>
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={styles.nav}>
          <Text style={{ color: "black", fontSize: 20 }}>
            Buscando os dados...
          </Text>

          <Text></Text>
          <Text></Text>

          <Pressable style={styles.campoPressProf}>
            <View style={styles.campoProf}>
              <Text>Consulte os professores</Text>
            </View>
          </Pressable>

          <Text></Text>

          <Pressable style={styles.campoPressSalas}>
            <View style={styles.campoSalas}>
              <Text>Consulte as salas</Text>
            </View>
          </Pressable>

          <Text></Text>

          <Pressable style={styles.campoPressAlocacao}>
            <View style={styles.campoAlocacao}>
              <Text>Consulte as alocações</Text>
            </View>
          </Pressable>

          <Text></Text>

          <Pressable style={styles.campoPressVisao}>
            <View style={styles.campoVisao}>
              <Text>Visão geral das alocações</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  corpo: {
    margin: 12,
    padding: 12,
  },

  nav: {
    backgroundColor: "#E9E9E9",
    padding: 20,
  },

  containerBoasVindas: {
    backgroundColor: "#058C42",
    borderRadius: 20,
    padding: 25,
    color: "white",
  },

  campoPressProf: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 20,
    backgroundColor: "#F18F01",

  },

  campoPressSalas: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 20,
    backgroundColor: "#048BA8",

  },

  campoPressAlocacao: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 20,
    backgroundColor: "#5F0B6A",

  },

  campoPressVisao: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    padding: 20,
    backgroundColor: "#A30000",

  },

});
