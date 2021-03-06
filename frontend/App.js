import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Tabs from './navigation/tabs';
import {
  Home,
  OrderDelivery,
  Restaurants,
  ListeCommandesLivreur,
  CommandeDetailleeLivreur,
  ApercuDetailleLivreur,
  Welcome,
  WelcomeInformations,
  Login,
  LoginOrSignIn,
  SignUp,
  ResetPassword,
  ResetPasswordEmail
} from './screens'

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

const App = () => {

  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  
  if(!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontsLoaded(true)}/>
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name='Home/Client' component={Tabs} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
        <Stack.Screen name='Restaurants' component={Restaurants} />
        <Stack.Screen name='Home/Livreur' component={ListeCommandesLivreur} />
        <Stack.Screen name='CommandeDetailleeLivreur' component={CommandeDetailleeLivreur} />
        <Stack.Screen name='ApercuDetailleLivreur' component={ApercuDetailleLivreur} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='WelcomeInformations' component={WelcomeInformations} />
        <Stack.Screen name='LoginOrSignIn' component={LoginOrSignIn} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ResetPasswordEmail' component={ResetPasswordEmail} />






      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;