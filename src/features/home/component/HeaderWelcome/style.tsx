import React from 'react'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body:{
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        padding: 20,
        // elevation: 20,
        marginBottom:4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 6,
    },
    text: {
        fontSize: 21,
        color: '#6a1b9b',
        fontWeight: 'bold',
        marginBottom: 8,
    }
});