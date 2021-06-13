import React from 'react'
import {StyleSheet, View} from 'react-native';
import DataWelcomeInformations from '../components/DataWelcomeInformations'
import { RedButton } from "../components/RedButton";

const WelcomeInformations = ({navigation}) => {
    
       

    
    

    
        return(
        <View style={styles.container}>

            <DataWelcomeInformations page = {this.state.page}/>
            <RedButton onPress={() => nextPage()} buttonText="Next" buttonStyle={styles.button}/>

        </View>
        )}
    



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    button: {
        marginBottom: 100,
        marginLeft: '10%'
    }
})



export default WelcomeInformations