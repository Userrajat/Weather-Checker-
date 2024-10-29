import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { WeatherList } from "./WeatherList";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Weather"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3B82F6",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Weather"
                component={WeatherList}
                options={{
                    title: "Weather Checker"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);