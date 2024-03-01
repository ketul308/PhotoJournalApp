import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import { NavConfig } from './NavConfig';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SummaryScreen from '../Screens/SummaryScreen/SummaryScreen';
import CameraScreen from '../Screens/CameraScreen/CameraScreen';

export type ScreenTypes = {
    HomeScreen: undefined
    SummaryScreen: undefined
    MyTabs: undefined
}

const Stack = createStackNavigator<ScreenTypes>();

const Tab = createBottomTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator screenOptions={{ ...NavConfig, tabBarShowLabel: false }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="CameraScreen" component={CameraScreen} />
            <Tab.Screen name="SummaryScreen" component={SummaryScreen} />
        </Tab.Navigator>
    );
}

function MyStack() {
    return (
        <Stack.Navigator screenOptions={NavConfig}>
            <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
    );
}

export default function RootNavigation() {

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            {MyStack()}
        </NavigationContainer>
    );
}