import React from 'react'
import {Image, StyleSheet, View} from 'react-native';
import { RedButton } from "../components/RedButton";
import {shopNCareIcon} from "../constants/images";

const Welcome  = ({navigation}) => {

    function nextPage() {

    }

  
        return(
        <View style={styles.container}>
            <Image
                style={{
                    marginTop: 50
                }}
                source={shopNCareIcon}
            />
                <RedButton onPress={() => navigation.navigate("WelcomeInformations", {
                                role: 1,
                            })} buttonText="Je suis client" buttonStyle={{marginTop: 50}}/>
                <RedButton onPress={() => navigation.navigate("LoginOrSignIn"
                            )} buttonText="Je suis livreur" buttonStyle={{marginTop: 100}}/>

            </View>
        )
    

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})





export default Welcome