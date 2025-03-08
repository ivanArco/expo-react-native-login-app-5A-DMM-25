import React from 'react'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
<<<<<<< Updated upstream
import { IonButton } from '../components/IonButton'
=======
import { View, Pressable } from 'react-native-web'
import { IonButton } from '../components/ionButton'
>>>>>>> Stashed changes

export function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
<<<<<<< Updated upstream

      <View style={{
        flexDirection:'row'
      }}>
        
        <IonButton 
          onPress={ () => navigation.navigate('Articles') }
        />
        <IonButton 
          name='person' 
          text='Personas' 
          onPress={ () => navigation.navigate('Persons') }
        />
        <IonButton 
          text='Ubicaciones' 
          name='business' 
          onPress={ () => navigation.navigate('Locations') }
        />

      </View>

      <View style={{
        flexDirection:'row'
      }}>
        
        <IonButton 
          text='Asignaciones' 
          name='shield-checkmark'
          onPress={ () => navigation.navigate('Assignments') }
        />
        <IonButton
          text='Inventarios'
          name='bag-check'
          onPress={ () => navigation.navigate('Inventaries') }
        />
        <IonButton 
          text='Escaner' 
          name='scan-circle'
          onPress={ () => navigation.navigate('Scan') }
        />

      </View>

=======
      <View>

        <IonButton  onPress={navigation.navigate('Articles')}/>
        <IonButton name='person' text="Personas"  onPress={navigation.navigate('Persons')}/>
        <IonButton  text='Inventarios' name='business' onPress={navigation.navigate('Inventary')}/>
        <IonButton  text='Escanear ' onPress={navigation.navigate('Scanner')}/>
        <IonButton text 

      </View>
>>>>>>> Stashed changes
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
