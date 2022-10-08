import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar, {HomeScreen, SettingsScreen} from "./MyTabBar";

const Tab = createBottomTabNavigator();

export default function MyTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}