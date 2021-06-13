import React from 'react'
import {Image, StyleSheet, View, Text} from 'react-native';
import {RedButton} from "../components/RedButton";
import {backgroundObjects, roundedRedBackground, shopNCareIcon, bloom} from "../constants/images";

const LoginOrSignIn = ({navigation}) =>  {

    


        return (
            <View style={styles.container}>
                <Image
                    style={{
                        position: 'absolute'
                    }}
                    source={bloom}
                />
                <Image
                    style={{
                        position: 'absolute',
                    }}
                    source={roundedRedBackground}
                />
                    <Image
                        style={{
                        }}
                        source={backgroundObjects}
                    />
                <Image
                    style={{
                    marginTop:-100
                    }}  source={shopNCareIcon} />

                <Text>
                    Livraison de course À Domicile
                </Text>
                <Text>
                    "Vos Courses en toute sécurité"
                </Text>




                <RedButton onPress={() => this.nextPage()} buttonText="Se Connecter" buttonStyle={{marginTop: 50}}/>
                <RedButton onPress={() => this.nextPage()} buttonText="Créer un compte" buttonStyle={styles.button} textStyle={{color: '#bd0101'}}/>

            </View>
        )
    }




const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    button: {
        marginTop: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#bd0101'
    }
})


export default LoginOrSignIn