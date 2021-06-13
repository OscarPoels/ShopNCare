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

    var divisionsId = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ];

    var divisions = [];

    divisions.push(
        <View key={0}  style={{paddingRight: 1, paddingTop: 1, paddingLeft: SIZES.padding, marginTop: SIZES.padding*2}}>
            <View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                elevation: 3, backgroundColor: 'white'}}>
                <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding * 14}}>Magasin</Text>
                <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Pharmacie</Text>
                <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>2 rue Victor Hugo</Text>
            </View>
        </View>
    );

    divisions.push(
        <View key={1}  style={{paddingRight: 1, paddingTop: 1, paddingLeft: SIZES.padding}}>
            <View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6, minHeight: SIZES.padding*16,
                borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                elevation: 3, backgroundColor: 'white'}}>
                <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding*14 + 2}}>Courses</Text>
                <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Doliprane x1</Text>
                <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>Dentifrice x1</Text>
            </View>
        </View>
    );

    divisions.push(
        <View key={2}  style={{paddingRight: 1, paddingTop: 1, paddingLeft: SIZES.padding}}>
            <View style={{width: '100%', marginBottom: SIZES.padding * 2, borderWidth: 0,
                paddingVertical: SIZES.padding * 2, paddingLeft: SIZES.padding * 6,
                borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 15, borderBottomRightRadius: 15,
                elevation: 3, backgroundColor: 'white'}}>
                <Text style={{color: '#4B4B4B', fontSize: SIZES.body2, fontWeight: 'bold', paddingRight: SIZES.padding*16 + 4}}>Client</Text>
                <Text style={{color: '#C1C1C1', fontSize: SIZES.body4 * 0.8, maxWidth: SIZES.padding*18}}>34 impasse des Acacias</Text>
            </View>
        </View>
    );

    divisions.push(
        <TouchableWithoutFeedback key={3} onPressIn={()=>animateIn()} onPressOut={()=>animateOut()}>
            <Animated.View style={{marginBottom: SIZES.padding * 2, borderWidth: 2, borderColor: 'white',
                paddingVertical: SIZES.padding * 2,
                borderRadius: 30, backgroundColor: '#bd0101',
                transform: [
                    {
                        scale: state.animatePress
                    }
                ]}}>
                <Text style={{color: 'white', paddingHorizontal: SIZES.padding*12}}>Trajet</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );

    const renderItem = ({ item }) => {
        return (divisions[item.id])
    }


    return (
        <SafeAreaView>
            <View style={styles.mainStyle}>
                <View style={styles.bonjourLivreurView}>
                    <Text style={styles.bonjourLivreurText}>Commande {itemIdx}</Text>
                </View>
                <View style={styles.redBackground}></View>
                <View style={{marginTop: SIZES.padding * 2, marginBottom: SIZES.padding*23 ,borderWidth: 0}}>
                    <FlatList
                        data={divisionsId}
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
        right: 0,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
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

export default CommandeDetailleeLivreur;