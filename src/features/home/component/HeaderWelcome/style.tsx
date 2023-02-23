import React from 'react'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body:{
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        padding: 10,
        // elevation: 20,
        marginBottom:4,
        shadowColor: '#000',
        borderBottomWidth:1,
        shadowOffset: {width: -3, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    text: {
        fontSize: 21,
        color: '#6a1b9b',
        fontWeight: 'bold',
        marginBottom: 8,
    }
});