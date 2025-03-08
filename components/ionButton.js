import { Pressable, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export const IonButton = ({
    name = "Desktop",
    size = 35,
    color = 'white',
    text = "Articulos",
    textColor = 'white',
    onPress =()=>{} }) => {
    return (
        <Pressable
            style={{
                backgroundColor: '#6929ff',
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                margin: 10
            }}
            onPress={onPress}
        >
            <Ionicons name={name} size={size} color={color} />
            <Text style={{ color: textColor }}>text</Text>
        </Pressable>
    );
};
