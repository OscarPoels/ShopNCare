import React from 'react'
import {Image, StyleSheet, View} from 'react-native';
import { RedButton } from "../components/RedButton";
import {shopNCareIcon} from "../constants/images";

class Welcome extends React.Component {

    nextPage() {

    }

    render(){
        return(
        <View style={styles.container}>
            <Image
                style={{
                    marginTop: 50
                }}
                source={shopNCareIcon}
            />
                <RedButton onPress={() => this.nextPage()} buttonText="Je suis client" buttonStyle={{marginTop: 50}}/>
                <RedButton onPress={() => this.nextPage()} buttonText="Je suis livreur" buttonStyle={{marginTop: 100}}/>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
})





export default Welcome