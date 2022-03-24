import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import growthWhey from "../assets/growth.png"


export default function Home({navigation }) {
    const irParaHome = () => {
        navigation.navigate("Home");
    };
    return (
        <ScrollView>
        <View style={styles.tudo}>
        <View style={styles.container}>
        <Image source={Options} style={styles.options} />
            <TouchableOpacity onPress={irParaHome} >
                <Text style={styles.tituloTxt}>Weight</Text>
                <Text style={styles.subTituloTxt}>Suplementos</Text>
            </TouchableOpacity>
            <Image source={littleCar} style={styles.littleCar} />
        </View>
            <View style={styles.placeholder}>
            <TextInput style={styles.input} placeholder="Busque pelo seu suplemento ideal" />
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    tudo: {
        backgroundColor: "#FFF",
    },
    container: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        paddingTop: "10px",
    },
    tituloTxt: {
        fontWeight: "bold",
        fontSize: "30px",
        marginLeft: 130,
    },
    subTituloTxt: {
        fontWeight: "bold",
        marginLeft: "138px",
        color: "darkGray"
    },
    options: { width: 30, height: 30, marginLeft: 10,},
    littleCar: { width: 40, height: 40,  marginLeft: 120,},
    placeholder: {
        backgroundColor: "#000000",
        width: "100",
        height: 50,
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#FFFF",
        height: 30,
        width: "90%",
        marginLeft: 27,
        borderRadius: "5px",
    },
    
});