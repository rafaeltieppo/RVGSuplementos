import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import growthWhey from "../assets/growth.png"
import cretina1 from "../assets/creatianG.png"
import uatis from "../assets/whatsapp-1 (1).png"
import wheyMax from "../assets/suplements.png"

export default function Home({navigation }) {
    const irParaHome = () => {
        navigation.navigate("Home");
    };
    return (
        <ScrollView>
            <View style={styles.fundo}>
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
            <Text style={styles.preco}>R$124,90</Text>
            <View style={styles.buttonBox}>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.carInput}>
                        <Text style={styles.carRinho}>ADCIONAR AO CARRINHO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.carInput2}>
                        <Text style={styles.carRinho2}>COMPRAR AGORA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
                <Text style={styles.prodRelac}>Produtos Relacionados</Text>
            <View style={styles.bigBox}>
                <View style={styles.caxa}>
                    <Image source={cretina1} style={styles.prodImg}></Image>
                    <Text style={styles.txtName}>Creatina Growth</Text>
                    <Text style={styles.descTxt}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precin}>R$50,00</Text>
                </View>
                <View style={styles.caxa2}>
                    <Image source={cretina1} style={styles.prodImg}></Image>
                    <Text style={styles.txtName}>Creatina Growth</Text>
                    <Text style={styles.descTxt}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precin}>R$50,00</Text>
                </View>        
            </View>
            <View style={styles.bigBox}>
                <View style={styles.caxa}>
                    <Image source={cretina1} style={styles.prodImg}></Image>
                    <Text style={styles.txtName}>Creatina Growth</Text>
                    <Text style={styles.descTxt}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precin}>R$50,00</Text>
                </View>
                <View style={styles.caxa2}>
                    <Image source={cretina1} style={styles.prodImg}></Image>
                    <Text style={styles.txtName}>Creatina Growth</Text>
                    <Text style={styles.descTxt}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precin}>R$50,00</Text>
                </View>        
            </View>
            <View style={styles.seeMore}>
                <ImageBackground 
                    source={{uri:wheyMax}}
                    style={styles.wheys}
                >
                    <TouchableOpacity style={styles.verMais}>
                        <Text style={styles.mais}>VER  MAIS</Text>
                    </TouchableOpacity>
            </ImageBackground>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.wats}>
                    <Image source={uatis} style={styles.uatisapi} />
                    <Text style={styles.txtUatis}>WATSAPP</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <Text style={styles.lastTxt}>RVG SUplementos. Todods os direitos reservados. 2022</Text>
            </View>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    fundo: {backgroundColor: "#FFF"},
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
    subTituloTxt: {fontWeight: "bold",marginLeft: "138px", color: "darkGray"},
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
    produto: {paddingTop: "30px",flexDirection: "row",},
    box:{
        backgroundColor: "#AEAEAE",
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
    txtes:{position: "relative"},
    name: {fontWeight: "bold",fontSize: "15px",marginLeft: "40px",},
    desc: {
        textAlign: "center",
        marginLeft: 20,
        marginTop: 25,
        width: "200px",
    },
    preco: {fontWeight: "bold",fontSize: "25px",marginLeft: 70},
    buttonBox: {alignItems: "center"},
    botoes: {
        backgroundColor: "#C4C4C4",
        width: "95%",
        height: 60,
        marginTop: 40,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    carInput: {
        backgroundColor: "#173EC7",
        width: "45%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 14,
    },
    carRinho: {
        color: "#FFFF",
        fontWeight: "bold",
        width: 180,
        marginTop: 10,
    },
    carInput2: {
        backgroundColor: "#173EC7",
        width: "45%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 14,
    },
    carRinho2: {
        color: "#FFF",
        fontWeight: "bold",
        width: 180,
        marginTop: 10,
        marginLeft: 50,
    },
    line: {
        backgroundColor: "#AEAEAE",
        width: "90%",
        height: 1,
        marginTop: 60,
        marginLeft: 20,
    },
    prodRelac: {
        fontWeight: "bold",
        fontSize: "19px",
        marginLeft: 20,
        marginTop: 20,
    },
    bigBox: {padding: 20, flexDirection: "row",},
    caxa: {
        backgroundColor: "#FFF",
        width: "40%",
        height: 350,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "5px",
        alignItems: "center",
    },

    caxa2: {
        backgroundColor: "#FFF",
        width: "40%",
        height: 350,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "5px",
        marginLeft: 80,
        alignItems: "center",
    },
    prodImg: {width: "80%", height: 170},
    txtName:{fontWeight: "bold", fontSize: 15},
    descTxt: {textAlign: "center", marginTop: 7},
    precin: {fontWeight: "bold",fontSize: 25, marginTop: 15},
    footer:{
        backgroundColor: "#000",
        width: "100%",
        height: 150,
        marginTop: 80,
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
});