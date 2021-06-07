import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {images} from './constants';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    marginTop: 150,
                }}
                source={images.market_computer}
            />
            <View style={{
                flexDirection: 'row',
            }}>
            <View style={[styles.circle,{
                backgroundColor: '#bd0101'
            }]}/>
            <View style={[styles.circle,{
                backgroundColor: '#D6D6D6'
            }]}/>
            <View style={[styles.circle,{
                backgroundColor: '#D6D6D6'
            }]}/>
            </View>
            <Text style={[styles.text, {
                marginTop: 50,
                fontSize: 35
            }]}>
                Trouve ton magasin !</Text>
            <Text style={[styles.text, {
                fontSize: 12,
                width:'80%',
                textAlign: 'justify'
            }]}>
                Sélectionne ce que tu souhaite acheter près de chez toi ! Que ca soit pour des courses ou des médicaments à la pharmacie tout est possible !
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#bd0101',
                    width: '80%',
                    height: 50,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50,
                }}
                onPress={() => nextPage()}>
                <Text
                    style={{
                        color: '#fff'
                    }}>
                    Next</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    text: {
        marginTop: 50
    },
    circle: {
        width:10,
        height:10,
        borderRadius: 100/2,
        margin: 10,
        marginTop: 50
    }
});

const nextPage = () => {
    console.log("Hellow world !")
}
