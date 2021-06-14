import React, {useState} from 'react';
import {
    SafeAreaView,
    Platform,
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image, FlatList,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import { icons, COLORS, FONTS, SIZES } from '../constants';

const ListeCommandesLivreur = ({route, navigation}) => {

    const [search, updateSearch] = useState();

    let [state, setState] = useState();

    state = {
        animatePress: [],
        toValueOut: 1,
        toValueIn: 0.95,
        animDuration: 100
    }

    var commandes = [];
    for(let i = 1; i <= 20; i++){
        commandes.push(
            {
                id: i
            }
        );
        state.animatePress.push(new Animated.Value(1));
    }

    function animateIn (i) {
        Animated.timing(state.animatePress[i-1], {toValue: state.toValueIn, duration: state.animDuration, useNativeDriver: true}).start();
    }
    function animateOut (i) {
        Animated.timing(state.animatePress[i-1], {toValue: state.toValueOut, duration: state.animDuration, useNativeDriver: true}).start();
    }

    function onPressGoTo (i) {
        navigation.navigate('ApercuDetailleLivreur', i);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{paddingRight: SIZES.padding, paddingTop: 1, paddingLeft: 1}}>
                <TouchableWithoutFeedback onPress={()=>onPressGoTo(item.id)} onPressIn={()=>animateIn(item.id)} onPressOut={()=>animateOut(item.id)}>
                    <Animated.View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                        paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6, paddingRight: SIZES.padding * 9,
                        borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                        elevation: 4, zIndex: 5, backgroundColor: 'white',
                        transform: [
                            {
                                scale: state.animatePress[item.id-1]
                            }
                        ]}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold'}}>Commande {item.id}</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8}}>Nombre de produits</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.mainStyle}>
                <View style={styles.bonjourLivreurView}>
                    <Text style={styles.bonjourLivreurText}>Bienvenue Livreur !</Text>
                </View>
                <View style={styles.searchBarView}>
                    <SearchBar
                        inputStyle={{color: 'red'}}
                        inputContainerStyle={{backgroundColor: '#F2F2F2', borderRadius: 60, fontColor: '#C1C1C1'}}
                        leftIconContainerStyle={{paddingLeft: 10, fontColor: '#8D8D8D'}}
                        containerStyle={{backgroundColor: 'transparent',
                            borderWidth: 1, borderRadius: 60,
                            borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                        placeholder={"Recherche"}
                        onChangeText={updateSearch}
                        value={search}/>
                </View>
                <View style={styles.redBackground}></View>
                <View style={{marginTop: SIZES.padding * 4, marginBottom: SIZES.padding * 29 ,borderWidth: 0}}>
                    <FlatList
                        data={commandes}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem}
                        contentContainerStyle = {{
                            overflow: 'scroll',
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBarView : {
        width: '90%',
        borderWidth: 0
    },
    mainStyle : {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    redBackground : {
        position: 'absolute',
        top: 200,
        left: 0,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#bd0101',
        height: '63%',
        width: '20%',
        zIndex: -5
    },
    bonjourLivreurView : {
        position: 'relative',
        width: '100%',
        top: 32,
        left: 5,
        padding: SIZES.padding * 2,
        margin: SIZES.padding * 2,
        zIndex: 2
    },
    bonjourLivreurText : {
        color: '#4B4B4B',
        fontSize: SIZES.h1 * 0.8
    },
    holaCenter: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListeCommandesLivreur;