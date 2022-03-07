import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Options from "../assets/menu.png";
import littleCar from "../assets/vista-lateral-vazia-do-carrinho-de-compras.png";
import bigImg2 from "../assets/banner02.png"
import shark from "../assets/tuba-removebg-preview.png"
import maxWhey from "../assets/maxtt.png"
import growthWhey from "../assets/growth.png"
import cretina1 from "../assets/creatianG.png"
import cretina2 from "../assets/creatinaM.png"
import cretina3 from "../assets/cratina_integral.png"
import uatis from "../assets/whatsapp-1 (1).png"
import wheyMax from "../assets/suplements.png"



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
            <View style={styles.princImg}>
                <Image source={bigImg2} style={styles.princImg} />
            </View>
            <View style={styles.tubatuba}>
                <Image source={shark} style={styles.tuba} />
            </View>
            <Text style={styles.subTtl}>Suplementos Proteicos</Text>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={maxWhey} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Whey de Baunilha </Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={growthWhey} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Whey de Morango </Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={maxWhey} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Whey de Baunilha </Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={growthWhey} style={styles.maxtt} />
                    <Text style={styles.nomeProd}>Whey de Morango </Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
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
                    <TouchableOpacity style={styles.verMais}>
                        <Text style={styles.mais}>VER  MAIS</Text>
                    </TouchableOpacity>
            </ImageBackground>
            </View>
            <Text style={styles.subTtl}>Suplementos Massa Muscular</Text>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={cretina1} style={styles.maxtt1} />
                    <Text style={styles.nomeProd}>Creatina growth </Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={cretina2} style={styles.maxtt1} />
                    <Text style={styles.nomeProd2}>
                        Creatina growth
                        monohidratada
                        </Text>
                    <Text style={styles.descProd2}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.boxProd}> 
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={cretina3} style={styles.maxtt1} />
                    <Text style={styles.nomeProd}>Creatina Integral</Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
                        <Text style={styles.txt} >COMPRAR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.prod}>
                    <View style={styles.waite}>
                    <Image source={cretina1} style={styles.maxtt1} />
                    <Text style={styles.nomeProd}>Creatina growth</Text>
                    <Text style={styles.descProd}>
                        descricao do produto
                        descricao do produto
                        descricao do produto
                        descricao do produto
                    </Text>
                    <Text style={styles.precProd}>R$124,39</Text>
                    </View>
                    <View style={styles.botao}>
                    <TouchableOpacity style={styles.timeInput}>
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
    princImg: { width: "100%", height: 140,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 10,},

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

    tubatuba: { marginTop: 20, alignItems:"center"},
    tuba: { width: 146, height: 199,},
    subTtl:{
        fontWeight: "bold",
        fontSize: 27,
        textAlign: "center",
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
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
    nomeProd1:{fontWeight: "bold", fontSize: "15px", marginTop: 20, textAlign: "center"},
    nomeProd2:{fontWeight: "bold", fontSize: "15px", marginTop: 10, textAlign: "center"},
    descProd: { textAlign: "center", marginTop: 15,},
    descProd2: { textAlign: "center", marginTop: 6,},
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