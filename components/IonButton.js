import { Pressable, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export const IonButton = ({ 
    name='desktop', 
    size=35, 
    color='white', 
    text='Artículos',
    textColor='white', 
    bgColor='#6929ff'}) => {
    return (
        <Pressable
            style={{
                backgroundColor: bgColor,
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                margin: 10
            }}
        >
            <Ionicons name={ name } size={ size } color={ color } />
            <Text
                style={{
                    color: textColor
                }}
            >
                { text }
            </Text>
        </Pressable>
    )
}