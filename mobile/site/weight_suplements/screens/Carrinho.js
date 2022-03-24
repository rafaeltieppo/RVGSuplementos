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
            <Text style={styles.txtTitle}>MEU CARRINHO111</Text>
            <View style={styles.all}>
            <View style={styles.boxss1}>
                <Text style={styles.prod}>Produto</Text>
            </View>
            <View style={styles.boxss}>
                <Text style={styles.prod}>Preço</Text>
            </View>
            <View style={styles.boxss}>
                <Text style={styles.prod}>Total</Text>
            </View>
            </View>
        </View>
        <View style={styles.bigbox}>
            <View style={styles.details}>
                <Image source={growthWhey} style={styles.suplements} />
                <Text style={styles.txtDesc}>(TOP) Whey Protein Concentrado (1KG) - Growth Supplements</Text> 
            </View> 
            <View style={styles.details2}>
                <Text style={styles.txtPrc}>R$124,90</Text>
            </View>
            <View style={styles.details3}>
                <Text style={styles.txtPrc2}>Preco+Frete R$129,90</Text>
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
    txtTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 20,
        color: "#0000FF"
    },
    prod: {
        fontWeight: "bold",
        marginTop: 5,
    },
    boxss: {
        borderWidth: 1,
        borderColor: "black",
        width: 130,
        marginTop: 30,
        alignItems: "center",
        height: 30,
    },
    boxss1: {
        borderWidth: 1,
        borderColor: "black",
        width: 204,
        marginTop:30,
        alignItems: "center",
        height: 30,
    },
    all: {
        flexDirection: "row",
    },
    suplements: {
        width: 100,
        height: 120,
        marginTop: 20,
    },
    bigbox: {
        flexDirection: "row",
    },
    txtDesc: {
        width: 100,
        marginTop: 10,
        fontWeight: "bold",
        textAlign: "center",
        padding:5,
    },
    txtPrc:{
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 18,
    },
    txtPrc2:{
        marginTop: 90,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    details: {
        borderWidth: 1,
        borderColor: "black",
        width: 204,
        alignItems: "center",
    },
    details2: {
        borderWidth: 1,
        borderColor: "black",
        width: 130,
        alignItems: "center",
    },
    details3: {
        borderWidth: 1,
        borderColor: "black",
        width: 130,
        alignItems: "center",
    },

});