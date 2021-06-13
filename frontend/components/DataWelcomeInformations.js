import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {images} from '../constants';

class DataWelcomeInformations extends React.Component {


    constructor(props) {
        super(props)
        this.firstSentence = ""
        this.overview = ""
        this.image = ""
    }

    displayRightInformation() {
        if (this.props.page === "FindAMarket") {
            this.firstSentence = "Trouve ton magasin !"
            this.overview = "Sélectionne ce que tu souhaite acheter près de chez toi ! Que ca soit pour des courses ou des médicaments à la pharmacie tout est possible !"
            this.image = images.market_computer
            this.backgroundColor1 = '#bd0101'
            this.backgroundColor2 = '#D6D6D6'
            this.backgroundColor3 = '#D6D6D6'
        } else if (this.props.page === "FindACourser") {
            this.firstSentence = "Met à disposition ta liste d'achat !"
            this.overview = "Patiente, un bénévole va prendre ta commande et aller récupérer tes courses"
            this.image = images.delivery_people
            this.backgroundColor1 = '#D6D6D6'
            this.backgroundColor2 = '#bd0101'
            this.backgroundColor3 = '#D6D6D6'
        } else if (this.props.page === "ContactCourser") {
            this.firstSentence = 'Reste en contact avec lui !'
            this.overview = "Guide le au maximum en attendant de recevoir le ticket de caisse pour confirmer le paiement en suspend !"
            this.image = images.live_tracking
            this.backgroundColor1 = '#D6D6D6'
            this.backgroundColor2 = '#D6D6D6'
            this.backgroundColor3 = '#bd0101'
        } else if (this.props.page === "FindClient") {
            this.firstSentence = 'Cherche une commande !'
            this.overview = "Trouve une commande qui te plait près de chez toi et confirme la !"
            this.image = images.live_tracking
            this.backgroundColor1 = '#bd0101'
            this.backgroundColor2 = '#D6D6D6'
            this.backgroundColor3 = '#D6D6D6'
        } else if (this.props.page === "ScanTicket") {
            this.firstSentence = 'Achète et scan ton ticket !'
            this.overview = "Rend toi en magasin, effectue tes achats et scan ton tickets de caisse pour recevoir ton remboursement instantanément !"
            this.image = images.ticket
            this.backgroundColor1 = '#D6D6D6'
            this.backgroundColor2 = '#bd0101'
            this.backgroundColor3 = '#D6D6D6'
        } else if (this.props.page === "Delivery") {
            this.firstSentence = 'Livraison et validation !'
            this.overview = "Il vous reste plus qu’a effectuer et valider la livraison au près de la personne !"
            this.image = images.delivery_people
            this.backgroundColor1 = '#D6D6D6'
            this.backgroundColor2 = '#D6D6D6'
            this.backgroundColor3 = '#bd0101'
        }
    }


    render() {
        this.displayRightInformation()

        return (

            <View style={styles.container}>
                <Image
                    style={{
                        marginTop: 50
                    }}
                    source={this.image}
                />
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={[styles.circle, {
                        backgroundColor: this.backgroundColor1
                    }]}/>
                    <View style={[styles.circle, {
                        backgroundColor: this.backgroundColor2
                    }]}/>
                    <View style={[styles.circle, {
                        backgroundColor: this.backgroundColor3
                    }]}/>
                </View>


                <Text style={[styles.text, {
                    marginTop: 50,
                    fontSize: 35
                }]}>

                    {this.firstSentence}</Text>


                <Text style={[styles.text, {
                    fontSize: 12,
                    width: '80%'
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
        marginTop: 50,
        textAlign: 'center'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        margin: 10,
        marginTop: 50
    }
})

export default DataWelcomeInformations