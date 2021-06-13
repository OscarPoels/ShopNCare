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

const ApercuDetailleLivreur = ({route, navigation}) => {

    const [itemIdx, setItemIdx] = useState();

    React.useEffect(() => {
        let idx = route.params;
        setItemIdx(idx);
    })

    let [state, setState] = useState();
    let [opacity, setOpacity] = useState(1.0);

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

    return (
        <SafeAreaView>
            <View opacity={opacity} style={styles.mainStyle}>
                <View style={styles.bonjourLivreurView}>
                    <Text style={styles.bonjourLivreurText}>Image Commande {itemIdx}</Text>
                </View>
                <View style={{width: '100%', height: 310, marginTop: SIZES.padding * 10}}>
                    <View style={{width: '100%', height: 310, borderWidth: 0,
                        paddingTop: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                        borderTopLeftRadius: 50, borderTopRightRadius: 50,
                        backgroundColor: 'white'}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding}}>Nom du Magasin</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*4}}>Description</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingTop: SIZES.padding}}>Courte description </Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*2}}>Adresse du client</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingTop: SIZES.padding}}>34 impasse des Acacias</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*2}}>Liste de courses</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingVertical: SIZES.padding}}>Nombre de produits : 8</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 150, top: 0}}>
                    <View style={styles.redBackground}></View>
                    <View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                        paddingVertical: SIZES.padding, paddingLeft: SIZES.padding*8, paddingRight: SIZES.padding,
                        borderTopLeftRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                        elevation: 4, zIndex: 5, backgroundColor: 'white', maxWidth: '90%', right: 30,
                        position: 'absolute', top: 35}}>
                        <TouchableWithoutFeedback onPressIn={()=>animateIn()} onPressOut={()=>animateOut()}>
                            <Animated.View style={{marginVertical: 0, borderWidth: 2, borderColor: 'white',
                                paddingVertical: SIZES.padding*1.5, alignItems: 'center',
                                borderRadius: 30, backgroundColor: '#bd0101',
                                transform: [
                                    {
                                        scale: state.animatePress
                                    }
                                ]}}>
                                <Text style={{color: 'white', paddingHorizontal: SIZES.padding*2}}
                                onPress={() => {opacity > 0.9 ? setOpacity(0.5) : setOpacity(1.0)}}>Prendre la commande</Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
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
        top: 0,
        left: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#bd0101',
        height: 145,
        width: '20%',
        zIndex: 5
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

export default ApercuDetailleLivreur;