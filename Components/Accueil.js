import React , {useState}from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DetailAccueil from './DetailAccueil'


class Accueil extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            page: "trouverMagasin"
        }
    }

    
    _nextPage() {
        this.setState({
            page: 'test'
        })
        console.log("Hellow world !")
    }

    render(){
        return(
        <View style={styles.container}>

            <DetailAccueil page = {this.state.page}/>

            <TouchableOpacity
                style={styles.bouton}
                onPress={() => this.nextPage()}>
                <Text
                    style={{
                        color: '#fff'
                    }}>
                    Next</Text>
            </TouchableOpacity>
        </View>
        )
    }

}


const styles = StyleSheet.create({
    bouton: {
        backgroundColor: '#bd0101',
        width: '80%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 25,
        marginLeft:'10%'
    }, 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    }
})



export default Accueil