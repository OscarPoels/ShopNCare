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
    Image,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import { icons, COLORS, FONTS, SIZES } from '../constants';

const CommandeDetailleeLivreur = ({route, navigation}) => {

    const [itemIdx, setItemIdx] = useState();

    React.useEffect(() => {
        let idx = route.params;
        setItemIdx(idx);
    })

    let [state, setState] = useState();

    state = {
        animatePress: new Animated.Value(1),
        toValueOut: 1,
        toValueIn: 0.95,
        animDuration: 100
    }

    function animateIn () {
        Animated.timing(state.animatePress, {toValue: state.toValueIn, duration: state.animDuration, useNativeDriver: true}).start();
    }
    function animateOut () {
        Animated.timing(state.animatePress, {toValue: state.toValueOut, duration: state.animDuration, useNativeDriver: true}).start();
    }

    var commandes = [];
    for(let i = 1; i <= 4; i++){
        commandes.push(
            <TouchableWithoutFeedback key={i-1} onPressIn={()=>animateIn(i-1)} onPressOut={()=>animateOut(i-1)}>
                <Animated.View style={{width: '70%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                    paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6, paddingRight: SIZES.padding * 9,
                    borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                    elevation: 3,
                    transform: [
                        {
                            scale: state.animatePress[i-1]
                        }
                    ]}}>
                    <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold'}}>Commande {i}</Text>
                    <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8}}>Nombre de produits</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.mainStyle}>
                <View style={styles.bonjourLivreurView}>
                    <Text style={styles.bonjourLivreurText}>Commandes {itemIdx}</Text>
                </View>
                <View style={{marginTop: SIZES.padding * 2 ,borderWidth: 0}}>
                    <View style={{width: '70%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                        paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                        borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                        elevation: 3}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding * 14}}>Magasin</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Informations du magasin</Text>
                    </View>
                    <View style={{height: '40%', width: '70%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                        paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                        borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                        elevation: 3}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding*14 + 2}}>Courses</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Les détails de la liste de course</Text>
                    </View>
                    <View style={{width: '70%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                        paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                        borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                        elevation: 3}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding*16 + 4}}>Client</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Infos client </Text>
                    </View>
                    <TouchableWithoutFeedback onPressIn={()=>animateIn()} onPressOut={()=>animateOut()}>
                        <Animated.View style={{width: '70%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                            paddingVertical: SIZES.padding * 2, paddingHorizontal: SIZES.padding * 11,
                            borderRadius: 30, backgroundColor: '#bd0101',
                            transform: [
                                {
                                    scale: state.animatePress
                                }
                            ]}}>
                            <Text style={{color: 'white'}}>Trajet</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
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
        position: 'relative',
        top: 180,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#bd0101',
        height: '70%',
        width: '20%',
        zIndex: -1
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

export default CommandeDetailleeLivreur;