import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Welcome from "../screens/Welcome";

const SearchStackNavigation = createStackNavigator()

function RootStack(){
    return(
        <SearchStackNavigation.Navigator
            initialRouteName="Welcome"
        >
            <SearchStackNavigation.Screen
                name = "Welcome"
                component = {Welcome}
                options={{title: "Welcome"}}
            />

        </SearchStackNavigation.Navigator>
    )


}

export default function Navigation() {
    return <NavigationContainer>{RootStack()}</NavigationContainer>;
}