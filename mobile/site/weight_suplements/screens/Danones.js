import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import emogenin from "../assets/bomba.png"
import boldenona from "../assets/boldenona.png"
import oximentolona from "../assets/oxi.png"
import trembolona from "../assets/trembo.png"
import geaga from "../assets/gh.png"
import uatis from "../assets/whatsapp-1 (1).png"
import wheyMax from "../assets/suplements.png"


export default function Danones({navigation }) {
    const irParaHome = () => {
        navigation.navigate("Home");
    };

    const irParaCompra = () => {
        navigation.navigate("Compra");
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
            <Image source={littleCar} style={styles.littleCar} />
        </View>
            <View style={styles.placeholder}>
            <TextInput style={styles.input} placeholder="Busque pelo seu suplemento ideal" />
            </View>
            <View style={styles.txttitle}>
                <Text style={styles.txtzin}>W Suplements > </Text>
                <Text style={styles.txtzao}>Esteroides anabolizantes</Text>
            </View>
            <View style={styles.esteroide}>
                <Image style={styles.imagenzin} source={emogenin} ></Image>
            </View>
            <View style={styles.alinharbum}>
                <Text style={styles.txtBum}>Cuidados com essa pagina: </Text>
                <Text style={styles.txtKabum}>Os efeitos colaterais mais comuns estão queda de cabelo, aumento da pressão arterial e risco de adquirir doenças transmissíveis, coágulos de sangue, retenção de líquidos, aumento de acnes e distúrbios da função do fígado. Antes da compra é aconselhavel que você busque um medico profissional na area</Text>
            </View>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={oximentolona} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Oximentolona </Text>
                    <Text style={styles.descProd}>
                    Medicamento indicado para complementar o tratamento da anemia e alterações sanguíneas
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput} onPress={irParaCompra} >
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={boldenona} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Boldenona </Text>
                    <Text style={styles.descProd}>
                      É derivado da testo anabólico.A molécula de testosterona com dupla ligação nos carbonos.
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}  onPress={irParaCompra}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={trembolona} style={styles.maxtt3} />
                    <Text style={styles.nomeProd}>Trembolona </Text>
                    <Text style={styles.descProd}>
                    É um esteroide anabol, com propriedades androgênicas do grupo 19-nor.
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput} onPress={irParaCompra} >
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={geaga} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>GH </Text>
                    <Text style={styles.descProd}>
                    GH (Growth Hormone) é o hormônio do crescimento; Produzido pela glândula hipófise
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}  onPress={irParaCompra}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.seeMore}>
                <ImageBackground 
                    source={{uri:wheyMax}}
                    style={styles.wheys}
                >
                    <TouchableOpacity onPress={irParaHome} style={styles.verMais}>
                        <Text style={styles.mais}>SUPLEMENTOS</Text>
                    </TouchableOpacity>
            </ImageBackground>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.wats}>
                    <Image source={uatis} style={styles.uatisapi} />
                    <Text style={styles.txtUatis}>WATSAPP</Text>
                </TouchableOpacity>
                <Text style={styles.txtTime}>SEGUNDA A SEXTA DAS 7:30 AS 11:30</Text>
                <View style={styles.line}></View>
                <Text style={styles.lastTxt}>Weight Suplementos. Todods os direitos reservados. 2022</Text>
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
    txttitle: {
        flexDirection: "row",
        padding: 10
    },
    txtzao: {fontWeight: "bold", },
    imagenzin: { width: "100%", height: 120},

    alinharbum:{alignItems: "center", 
    paddingTop: 20, 
    borderWidth:1, 
    borderColor:"black",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 10,
},
    txtBum:{fontWeight: "bold", fontSize:20},
    txtKabum:{textAlign: "center",paddingBottom:20},
    boxProd: { paddingTop: 40, flexDirection: "row",},
    prod: {
        backgroundColor: "#000",
        width: "40%",
        height: 500,
        borderRadius: 15,
        marginLeft: 30,
        alignItems: "center"
    },
    waite: {
        backgroundColor: "#FFFF",
        width: "85%",
        height: 400,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        paddingTop: 10,
    },
    maxtt: { width: "90%", height: 200,},
    maxtt1: { width: "90%", height: 190,},
    nomeProd: { fontWeight: "bold", fontSize: "15px", marginTop: 20, },
    descProd: { textAlign: "center", marginTop: 15,},
    precProd: { fontWeight: "bold", fontSize: "25px", marginTop: 15,},
    botao: {
        width: "90%",
        height: 50,
        backgroundColor: "#0000FF",
        marginTop: 20,
        borderRadius: 15,
    },
    timeInput:{ alignItems: "center",},
    txt: {fontWeight: "bold", color: "#FFFF", marginTop: 14,},
    maxtt3: { width: "95%", height:180, marginTop: 20},

    footer:{
        backgroundColor: "#000",
        width: "100%",
        height: 150,
        marginTop: 50,
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
        width: "18%", height: 25,
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
});