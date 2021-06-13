import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DataWelcome from './DataWelcome'


class Welcome extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            page: "WelcomeSectionFindAMarket"
        }
    }


    nextPage() {
        this.setState({
            page: 'WelcomeSectionFindAClient'
        })
        console.log("Hellow world !")
    }

    render(){
        return(
            <View style={styles.container}>

                <DataWelcome page = {this.state.page}/>

                <TouchableOpacity
                    style={styles.button}
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
    button: {
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



export default Welcome