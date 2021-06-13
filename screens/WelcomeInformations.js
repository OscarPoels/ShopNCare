import React from 'react'
import {StyleSheet, View} from 'react-native';
import DataWelcomeInformations from '../components/DataWelcomeInformations'
import { RedButton } from "../components/RedButton";

class WelcomeInformations extends React.Component {
 
    constructor(props){
        super(props)
        this.typePerson = 2
        if(this.typePerson===1){
            this.page = ["FindAMarket","FindACourser","ContactCourser"]
        }else{
            this.page = ["FindClient","ScanTicket","Delivery"]
        }

        this.numberPage = 0
        this.state = {
            page: this.page[this.numberPage]
        }

    }

    
    nextPage() {
        this.numberPage += 1
        if(this.numberPage >= 3){
            this.numberPage = 0
        }
        this.setState({
            page: this.page[this.numberPage]
        })

    }

    render(){
        return(
        <View style={styles.container}>

            <DataWelcomeInformations page = {this.state.page}/>
            <RedButton onPress={() => this.nextPage()} buttonText="Next" buttonStyle={styles.button}/>

        </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    button: {
        marginTop: 25,
        marginBottom: 100,
        marginLeft: '10%'
    }
})



export default WelcomeInformations