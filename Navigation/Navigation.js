import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Accueil from '../Components/Accueil'

const SearchStackNavigation = createStackNavigator()

function RootStack(){
    return(
        <SearchStackNavigation.Navigator
            initialRouteName="Accueil"
        >
            <SearchStackNavigation.Screen
                name = "Accueil"
                component = {Accueil}
                options={{title: "Accueil"}}
            />

        </SearchStackNavigation.Navigator>
    )


}

export default function Navigation() {
    return <NavigationContainer>{RootStack()}</NavigationContainer>;
}