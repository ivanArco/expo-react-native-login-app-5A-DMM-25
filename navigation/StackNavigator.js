import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StartScreen, Dashboard, LoginScreen, RegisterScreen, ResetPasswordScreen} from '../screens';
<<<<<<< Updated upstream
import { DrawerNavigator } from './DrawerNavigator';
=======
import { Drawernavigator } from './DrawerNavigator';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
<<<<<<< Updated upstream
        initialRouteName='Menu'
        screenOptions={{
          headerShown: false
        }}>
=======
      initialRouteName='Menu'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name='StartScreen' component={ StartScreen } />
>>>>>>> Stashed changes
        <Stack.Screen name='Dashboard' component={ Dashboard } />
        <Stack.Screen name='StartScreen' component={ StartScreen } />
        <Stack.Screen name='LoginScreen' component={ LoginScreen } />
        <Stack.Screen name='RegisterScreen' component={ RegisterScreen } />
        <Stack.Screen name='ResetPasswordScreen' component={ ResetPasswordScreen } />
<<<<<<< Updated upstream
        <Stack.Screen name='Menu' component={ DrawerNavigator } />
=======
        <Stack.Screen name='Menu' component={Drawernavigator}/>
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;