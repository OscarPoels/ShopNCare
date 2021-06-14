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
import images from "../constants/images";

const ApercuDetailleLivreur = ({route, navigation}) => {

    const [itemIdx, setItemIdx] = useState();

    React.useEffect(() => {
        let idx = route.params;
        setItemIdx(idx);
    })

    let [state, setState] = useState();
    let [popUpIsUp, setPopUpIsUp] = useState(false);

    state = {
        animatePress: new Animated.Value(1),
        toValueOut: 1,
        toValueIn: 0.95,
        animDuration: 100,
        animatePopUp: new Animated.Value(1),
        toTop: -850
    }

    function showPopUp () {
        Animated.timing(state.animatePopUp, {toValue: state.toTop, duration: state.animDuration*4, useNativeDriver: true}).start();
    }

    function animateIn () {
        Animated.timing(state.animatePress, {toValue: state.toValueIn, duration: state.animDuration, useNativeDriver: true}).start();
    }
    function animateOut () {
        Animated.timing(state.animatePress, {toValue: state.toValueOut, duration: state.animDuration, useNativeDriver: true}).start();
    }

    function onPressGoTo (i) {
        navigation.navigate('CommandeDetailleeLivreur', i);
    }

    return (
        <SafeAreaView>
            <View style={styles.mainStyle}>
                <View style={styles.bonjourLivreurView}>
                    <Image source={images.image_pharma}/>
                </View>
                <View style={{width: '100%', height: 310, marginTop: -100}}>
                    <View style={{width: '100%', height: 310, borderWidth: 0,
                        paddingTop: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                        borderTopLeftRadius: 50, borderTopRightRadius: 50,
                        backgroundColor: 'white'}}>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding}}>Pharmacie</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*4}}>Description</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingTop: SIZES.padding}}>Pharmacie normale </Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*2}}>Adresse du client</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingTop: SIZES.padding}}>34 impasse des Acacias</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding*2}}>Liste de courses</Text>
                        <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18, paddingVertical: SIZES.padding}}>Nombre de produits : 2</Text>
                    </View>
                </View>
                {
                    popUpIsUp ?
                        <View></View>
                        :
                        <View style={{width: '100%', height: 150, top: 0}}>
                            <View style={styles.redBackground}></View>
                            <View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                                paddingVertical: SIZES.padding, paddingLeft: SIZES.padding*8, paddingRight: SIZES.padding,
                                borderTopLeftRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                                elevation: 4, zIndex: 5, backgroundColor: 'white', maxWidth: '90%', right: 30,
                                position: 'absolute', top: 35}}>
                                <TouchableWithoutFeedback onPress={() => {setPopUpIsUp(true)}} onPress={() => showPopUp()}>
                                    <Animated.View style={{marginVertical: 0, borderWidth: 2, borderColor: 'white',
                                        paddingVertical: SIZES.padding*1.5, alignItems: 'center',
                                        borderRadius: 30, backgroundColor: '#bd0101',
                                        transform: [
                                            {
                                                scale: state.animatePress
                                            }
                                        ]}}>
                                        <Text style={{color: 'white', paddingHorizontal: SIZES.padding*2}}>Prendre la commande</Text>
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                }


            </View>
            <View style={{height: '50%', width: '100%', position: 'absolute'}}>
                <View style={{width: '100%', height: 410, marginTop: SIZES.padding * 10, elevation: 6}}>
                    <Animated.View style={{width: '100%', height: 750, elevation: 10,
                        paddingTop: SIZES.padding * 2,
                        borderTopLeftRadius: 50, borderTopRightRadius: 50,
                        backgroundColor: 'white', alignItems: 'center', top: 800,
                        transform: [
                            {
                                translateY: state.animatePopUp
                            }
                        ]}}>
                        <Image source={icons.logo_snc} style={{width: 200, height: 200}}/>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingTop: SIZES.padding}}>Merci</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body3, fontWeight: 'bold', paddingTop: SIZES.padding}}>Pour votre prise en charge</Text>
                        <Text style={{color: '#4B4B4B', fontSize: SIZES.body3, fontWeight: 'bold', paddingTop: SIZES.padding, paddingBottom: SIZES.padding*2}}>de cette commande</Text>
                        <TouchableWithoutFeedback onPress={()=>onPressGoTo(itemIdx)}>
                            <Animated.View style={{marginVertical: 0, borderWidth: 2, borderColor: 'white',
                                paddingVertical: SIZES.padding*1.5, alignItems: 'center',
                                borderRadius: 30, backgroundColor: '#bd0101',
                                transform: [
                                    {
                                        scale: state.animatePress
                                    }
                                ]}}>
                                <Text style={{color: 'white', paddingHorizontal: SIZES.padding*2}}>Voir la commande</Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
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
        left: 0,
        padding: 0,
        margin: 0,
        zIndex: -1
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