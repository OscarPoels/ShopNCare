import React from 'react';
import {
    SafeAreaView,
    Platform,
    View, 
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
    TextInput,

    
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { icons, COLORS, FONTS, SIZES } from '../constants';

const Restaurants = ({route, navigation}) => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);
    const [name, onChangeName] = React.useState("name");
    const [description, onChangeDescription] = React.useState("Description");
    const [price, onChangePrice] = React.useState("prix");





    

    React.useEffect(() => {
        let { item, currentLocation } = route.params;
        setRestaurant(item);
        setCurrentLocation(currentLocation)
    })

    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQuantity(id) {
        let orderItem= orderItems.filter(item => item.menuId == id)
        if(orderItem.length > 0){
            return orderItem[0].qty
        }else{
            return 0;
        }
    }

    function addProduct(name, description, price) {
        restaurant?.menu.push(
            {
                menuId: restaurant?.menu?.length,
                name: name,
                description: description,
                price: parseInt(price),
            },
        )
        setRestaurant();
        setModalVisible(false);

        console.log(restaurant?.menu)
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);
        return itemCount;
    }

    function sumOrder(){
        let total = orderItems.reduce((a, b)=> a + (b.qty * b.price || 0),0)
        return total.toFixed(2);
    }

    function renderModalAddProduct(){
        return (
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Product Informations</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={description}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePrice}
                value={price}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addProduct(name,description,price)}
            >
              <Text style={styles.textStyle}>ADD</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
        )
    }

    function renderHeader(){
        return (
            <View style={{
                flexDirection:'row',
                marginTop: (Platform.OS =="android" ? 30 : 0)
            }}>
                <TouchableOpacity
                    style={{
                        paddingLeft: SIZES.padding*2,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source ={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            justifyContent: "center"
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: SIZES.padding*3,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray3
                    }}>
                        <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>
                    </View>

                </View>

                <TouchableOpacity style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: "center"
                }}>
                    <Image 
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            justifyContent: "center"
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFoodInfo(){
        return (
            <ScrollView
                
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } } 
                ], { useNativeDriver: false })}
            >
                {
                    restaurant?.menu.map((item,index) => (
                        <View
                            key={`menu-${index}`}
                            style={{
                                flex:1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: SIZES.padding *2,
                                paddingHorizontal: SIZES.padding *3,
                                
                                
                               


                            }}
                        
                        >


                            <View style={{ height: SIZES.height *0.10}}>
                                {/* Food Image */}
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent: 'space-between',
                                    paddingVertical: SIZES.padding*2, 
                                    paddingHorizontal: SIZES.padding *3,
                                    borderBottomColor: COLORS.lightGray2,
                                    borderBottomWidth: 1,
                                
                            }}>
                        
                        <View style={{
                                    flex:1,
                                    position: 'absolute',
                                    width: SIZES.width,
                                    alignItems:"flex-start",
                                    marginLeft:-80,
                                    height: 50,
                                    flexDirection: 'row'
                                    
                                }}>
                                    <Text style={{ marginVertical: 10, textAlign: "left",...FONTS.h2}}>{item.name} - {item.price.toFixed(2)}</Text>

        

                                </View>
                       
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: SIZES.padding *2,
                        paddingHorizontal: SIZES.padding *3,
                        
                    }}>
                        
                        <View style={{ flexDirection: 'row'}}>
                        <TouchableOpacity 
                                    onPress={() => editOrder("-", item.menuId, item.price)}   
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopLeftRadius: SIZES.radius,
                                        borderBottomLeftRadius: SIZES.radius
                                    }}>
                                        <Text style={{...FONTS.h1}}>-</Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems:"center",
                                        backgroundColor: COLORS.white,
                                        width:50,
                                    }}>
                                        <Text style={{...FONTS.h3}}>{ getOrderQuantity(item.menuId)}</Text>
                                    </View>
                                    <TouchableOpacity 
                                        style={{
                                            width: 50,
                                            borderTopRightRadius: SIZES.radius,
                                            borderBottomRightRadius: SIZES.radius,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: COLORS.white
                                        }}
                                        onPress={() => editOrder("+", item.menuId, item.price)}
                                        >
                                        <Text style={{...FONTS.h1}}>+</Text>
                                    </TouchableOpacity>
                            
                    </View>
                   
                     
                            
                    </View>           
                                
                                
                            </View>                        

                            
                        </View>
                    ))
                }
                 <View style={{
                     flex:1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: SIZES.padding *2,
                        paddingHorizontal: SIZES.padding *3,
                        
                    }}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>+ADD PRODUCT</Text>
                    </Pressable>
                
                </View>

            </ScrollView>
            
        )
    }

  
    
    
    function renderOrder(){
        return(
            <View>
            
                <View style={{
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding*2, 
                        paddingHorizontal: SIZES.padding *3,
                        borderBottomColor: COLORS.lightGray2,
                        borderBottomWidth: 1
                    }}>
                        <Text style={{...FONTS.h3}}> { getBasketItemCount() } Items. ShopNCare estimation :</Text>
                        <Text style={{...FONTS.h3}}> ${ sumOrder()}</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: SIZES.padding *2,
                        paddingHorizontal: SIZES.padding *3
                    }}>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Image 
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4}} >{currentLocation?.streetName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Image
                            source={icons.mastercard}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray
                            }}
                             />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4}} >8888</Text>
                        </View>
                    </View>

                    {/* Order Button */}
                    <View style={{
                        padding: SIZES.padding * 2,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity
                            style= {{
                                width: SIZES.width*0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            onPress = {() => navigation.navigate("OrderDelivery", {
                                restaurant: restaurant,
                                currentLocation: currentLocation
                            })}
                        >
                            <Text style={{ color: COLORS.white,...FONTS.h2}}>Order</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                {
                    isIphoneX() && 
                    <View
                        style={{
                            position: "absolute",
                            bottom: -34,
                            left: 0,
                            right: 0,
                            height: 34,
                            backgroundColor: COLORS.white
                        }}></View>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            { renderHeader() }
            { renderFoodInfo() }
            { renderModalAddProduct() }
            { renderOrder() }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: COLORS.primary,
      },
      buttonClose: {
        backgroundColor: COLORS.primary,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
      },
})
export default Restaurants;