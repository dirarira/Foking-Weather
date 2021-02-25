import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions ={
    Clouds:{
        title:"Clouds Day!!",
        subTitle: "Go Outside!!",
        iconName: "cloud",
        gradient: ["white", "black"]
    },
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions["Clouds"].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                name={weatherOptions["Clouds"].iconName} 
                size={120} 
                color="white" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions["Clouds"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Clouds"].subTitle}</Text>
                </View>
            </View>
        </LinearGradient>);
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Clouds"  
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 46,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        fontSize: 24,
        fontWeight: "600",
        color: "white"
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
});