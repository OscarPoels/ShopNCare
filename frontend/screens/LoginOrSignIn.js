import React from 'react'
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RedButton} from "../components/RedButton";
import {backgroundObjects, roundedRedBackground, shopNCareIcon, bloom} from "../constants/images";
import { icons, COLORS, FONTS, SIZES } from '../constants';

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
                <TouchableOpacity
                    style={{
                        paddingLeft: SIZES.padding*2,
                        width: 50,
                        position:"absolute",
                        top:50,
                        left:"5%",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source ={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            
                        }}
                    />
                </TouchableOpacity>




                <RedButton onPress={() => navigation.navigate("Login")} buttonText="Se Connecter" buttonStyle={{marginTop: 50}}/>
                <RedButton onPress={() => navigation.navigate("SignUp")} buttonText="Créer un compte" buttonStyle={styles.button} textStyle={{color: '#bd0101'}}/>

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