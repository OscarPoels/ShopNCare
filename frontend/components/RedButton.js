import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native";


export const RedButton = ({onPress, buttonText, buttonStyle, textStyle}) => {
        return(
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, buttonStyle]}>
            <Text
                style={[{color: '#fff'},textStyle]}>
                {buttonText}</Text>
        </TouchableOpacity>
        )
    }


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#bd0101',
        width: '80%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

