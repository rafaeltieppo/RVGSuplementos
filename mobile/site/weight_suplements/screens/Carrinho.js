import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import growthWhey from "../assets/growth.png"
import uatis from "../assets/whatsapp-1 (1).png"


export default function Carrinho({navigation }) {
    const irParaHome = () => {
        navigation.navigate("Home");
    };
    return (
        <ScrollView>
        <View style={styles.tudo}>
        <View style={styles.container}>
        <TouchableOpacity onPress={ () => {
                    console.log("oi")
                    navigation.toggleDrawer();
                }}>
                    <Image source={Options} style={styles.options} />
                </TouchableOpacity>
            <TouchableOpacity onPress={irParaHome} >
                <Text style={styles.tituloTxt}>Weight</Text>
                <Text style={styles.subTituloTxt}>Suplementos</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.placeholder}>
            <TextInput style={styles.input} placeholder="Busque pelo seu suplemento ideal" />
            </View>
            <Text style={styles.txtTitle}>MEU CARRINHO</Text>
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
        <Text style={styles.inf}>Entrega :</Text>
        <View style={styles.allInp}>
            <View style={styles.placeholder2}>
                <TextInput style={styles.input2} placeholder="Infrome seu CEP:" />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity style={styles.timeInput} >
                    <Text style={styles.txt} >CALCULAR</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.inf}>Cupom de Desconto :</Text>
        <View style={styles.allInp}>
            <View style={styles.placeholder2}>
                <TextInput style={styles.input2} placeholder="Infrome o codigo:" />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity style={styles.timeInput} >
                    <Text style={styles.txt} >ADCIONAR</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.boxbar}>
            <View style={styles.toolbar}>
                <Text style={styles.txtPedido5}>Resumo do pedido</Text>
            </View>
            <View style={styles.toolbar2}>
                <Text style={styles.txtPedido}>Frete:</Text>
                <Text style={styles.txtPedido}>R$5</Text>
            </View>
            <View style={styles.toolbar3}>
                <Text style={styles.txtPedido}>Subtotal:</Text>
                <Text style={styles.txtPedido}>R$124,90</Text>
            </View>
            <View style={styles.toolbar4}>
                <Text style={styles.txtPedido2}>TOTAL:</Text>
                <Text style={styles.txtPedido3}>R$129,90</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.fnlzrCompra}>
            <Text style={styles.jaE}>FINALIZAR COMPRA</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
                <TouchableOpacity style={styles.wats}>
                    <Image source={uatis} style={styles.uatisapi} />
                    <Text style={styles.txtUatis}>WATSAPP</Text>
                </TouchableOpacity>
                <Text style={styles.txtTime}>SEGUNDA A SEXTA DAS 7:30 AS 11:30</Text>
                <View style={styles.line}></View>
                <Text style={styles.lastTxt}>Weight Suplementos. Todods os direitos reservados. 2022</Text>
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
    inf: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20,
    },
    placeholder2: {
        borderWidth: 1,
        borderColor: "black",
        width: '40%',
        borderRadius: 4,
        height: 40,
        marginLeft: 19,
        marginTop: 20
    },
    input2: {
        marginTop: 10,
        fontSize: 14,
        marginLeft: 5
    },
    timeInput:{ alignItems: "center", backgroundColor: "#000FF"},
    txt: {fontWeight: "bold", color: "#FFFF", marginTop: 10,},
    botao: {
        width: "40%",
        height: 40,
        backgroundColor: "#0000FF",
        marginTop: 20,
        borderRadius: 7,
        marginLeft: 20,
    },
    allInp:{
        flexDirection: "row",
    },
    boxbar: {
        alignItems: "center",
        marginTop: 40
    },
    toolbar: {
        borderWidth: 1,
        borderColor: "black",
        width: '70%',
        height: 50,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    txtPedido:{fontWeight: "bold", fontSize:18,},
    toolbar2: {
        borderWidth: 0.5,
        borderColor: "black",
        width: '70%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    toolbar3: {
        
        borderWidth: 1,
        borderColor: "black",
        width: '70%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    toolbar4: {
        borderWidth: 1,
        borderColor: "black",
        width: '70%',
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    txtPedido2:{fontWeight: "bold", fontSize:18,},
    txtPedido3:{fontWeight: "bold", fontSize:20, marginLeft:70, color:"#0000FF"},
    txtPedido5:{fontWeight: "bold", fontSize:22, color:"#0000FF"},
    fnlzrCompra:{
        alignItems: "center", backgroundColor: "#0000FF", width: "50%", marginLeft: 120, marginTop: 40, borderRadius: 5, height:45, justifyContent: "center", 
    },
    jaE: {fontWeight: "bold", color: "#FFFF", },
    footer:{
        backgroundColor: "#000",
        width: "100%",
        height: 140,
        marginTop: 60,
    },
    wats:{
        backgroundColor: "#403E3E",
        width: "30%",
        height: 40,
        marginTop: 20,
        marginLeft: 300,
        flexDirection: "row",
        alignItems: "center",
    },
    uatisapi:{
        width: "17%", height: 25,
        marginLeft: 10,
    },
    txtUatis:{
        color: "#FFFF",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 30,
    },
    line:{
        backgroundColor: "#FFFF",
        width: "95%",
        height: 1,
        marginTop: 20,
        marginLeft: 13,
    },
    lastTxt: {
        color: "#FFFF",
        marginLeft: 13,
        marginTop: 20,
    },
    seeMore: {borderRadius: 15},
    wheys: {
        width: "85%", 
        height: 120,
        marginLeft:"13%",
        marginTop: 35,
    },
    verMais: {
        backgroundColor: "#0000FF",
        width: "40%", 
        height: 50,
        borderRadius: 20,
        marginTop: 40,
        marginLeft: 90, 
        alignItems: "center"
    },
    mais: {
        fontWeight: "bold",
        color: "#FFFF",
        marginTop: 15,
    },
    txtTime:{color: "#FFFF", fontSize: 10, marginLeft: 270, marginTop: 4},


});

// borderTopEndRadius: 6,
// borderTopStartRadius: 12,
// borderBottomStartRadius: 6,
// borderBottomEndRadius: 12,