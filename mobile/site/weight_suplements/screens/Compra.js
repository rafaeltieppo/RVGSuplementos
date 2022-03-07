import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import growthWhey from "../assets/growth.png"

export default function Home({ }) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={Options} style={styles.options} />
                <View>
                    <Text style={styles.tituloTxt}>Weight</Text>
                    <Text style={styles.subTituloTxt}>Suplementos</Text>
                </View>
                <Image source={littleCar} style={styles.littleCar} />
            </View>
            <View style={styles.placeholder}>
                <TextInput style={styles.input} placeholder="Busque pelo seu suplemento ideal" />
            </View>
            <View style={styles.produto}>
                <View style={styles.box}>
                    <Image source={growthWhey} style={styles.imgWhey}/>
                </View>
                <View style={styles.txtes}>
                <Text style={styles.name}>Whey morango growth</Text>
                <Text style={styles.desc}>
                    Descrição do produto
                    Descrição do produtoDescrição do produto
                    Descrição do produtoDescrição do produto
                    Descrição do produtoDescrição do produto
                    Descrição do produtoDescrição do produto
                    Descrição do produtoDescrição do produto
                    Descrição do produtoDescrição do produto
                    
                    </Text>    
                </View>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
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
    littleCar: { width: 40, height: 40,  marginLeft: 100,},
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
    produto: {
        paddingTop: "30px",
        flexDirection: "row",
        
    },
    box:{
        backgroundColor: "#C4C4C4",
        width: "45%", 
        height: 270,
        borderRadius: "3px",
        marginLeft: 20,
        alignContent: "center",
    },
    imgWhey: {
        width: "95%",
        height: 250,
        marginTop: "10px",
        marginLeft: 3
    },
    txtes:{
        position: "relative"
    },
    name: {
        fontWeight: "bold",
        fontSize: "15px",
        marginLeft: "40px",
    },
    desc: {
        textAlign: "center",
        marginLeft: 20,
        marginTop: 25,
        width: "200px",
    },

});