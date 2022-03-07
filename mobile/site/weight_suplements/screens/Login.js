import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import gym from "../assets/academia.jpg";

export default function Home({ }) {

    return (
        <ScrollView>
             <ImageBackground 
                    source={{uri:gym}}
                    style={styles.halter}
                >
            <View style={styles.container}>
                <Text style={styles.tittle}>Weight</Text>
                <Text style={styles.subTittle}>suplements</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.card}>
                    <Text style={styles.login}>Login</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input1} placeholder="Senha" />
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.tittle2}>Não tem conta ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.subTittle2}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    halter: {
        height: 900,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    tittle: {
        fontWeight: "bold",
        fontSize: 30,
    },
    subTittle: {
        fontSize: 15,
    },
    box: {
        alignItems: "center",
        paddingTop: 85,
    },
    card: {
        backgroundColor: "#173EC7",
        width: "65%",
        height: 400,
        borderRadius: 10,  
        alignItems: "center",
        borderWidth: 4,
        borderRightColor: "black"
    },
    login: {
        fontWeight: "bold",
        color: "#FFFF",
        marginTop: 30,
        fontSize: 20,
    },
    input: {
        backgroundColor: "#FFFF",
        height: 40,
        width: "90%",
        borderRadius: "5px",
        marginTop: 45,
 
    },
    input1: {
        backgroundColor: "#FFFF",
        height: 40,
        width: "90%",
        borderRadius: "5px",
        marginTop: 45,

    },
    button: {
        width: "70%",
        height: 50,
        borderWidth: 4,
        borderColor: "black",
        backgroundColor: "#FFFF",
        borderTopEndRadius: 6,
        borderTopStartRadius: 12,
        borderBottomStartRadius: 6,
        borderBottomEndRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      },
      buttonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
      },
      tittle2: {
        color: "white",
        marginTop: 20,

      },
      subTittle2: {
        color: "white",
        marginTop: 5,
      },

});