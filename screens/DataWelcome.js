import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {images} from '../constants';

class DetailAccueil extends React.Component {


    constructor(props){
        super(props)
        this.firstSentence=""
        this.overview=""
        //Ajouter ici une variable pour l'image
    }

    displayData(){
        if(this.props.page === "WelcomeSectionFindAMarket"){
            this.firstSentence = "Trouve ton magasin !"
            this.overview = "Sélectionne ce que tu souhaite acheter près de chez toi ! Que ca soit pour des courses ou des médicaments à la pharmacie tout est possible !"
            //Ajouter ici la variable de l'image
        }
        else if(this.props.page === "WelcomeSectionFindAClient"){
            this.firstSentence = 'Test'
            this.overview = "J'adore les tests !!!!"
        }
    }



    render(){
        console.log(this.props.page)
        this.displayData()

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

                    {this.firstSentence}</Text>


                <Text style={[styles.text, {
                    fontSize: 12,
                    width:'80%',
                    textAlign: 'justify'
                }]}>
                    {this.overview}
                </Text>
            </View>
        )

    }


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
})

export default DetailAccueil