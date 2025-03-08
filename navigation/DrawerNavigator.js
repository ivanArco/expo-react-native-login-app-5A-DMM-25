<<<<<<< Updated upstream
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    Dashboard, 
    ArticleScreen, 
    PersonScreen, 
    LocationScreen,
    AssignmentScreen,
    InventaryScreen,
    ScanScreen
 } from '../screens'

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name='Menu'
            component={ Dashboard }
            options={{
                title: 'Menú principal'
            }}
        />
        <Drawer.Screen
            name='Articles'
            component={ ArticleScreen }
            options={{
                title: 'Artículos'
            }}
        />
        <Drawer.Screen
            name='Persons'
            component={ PersonScreen }
            options={{
                title: 'Personas'
            }}
        />
        <Drawer.Screen
            name='Locations'
            component={ LocationScreen }
            options={{
                title: 'Ubicaciones'
            }}
        />
        <Drawer.Screen
            name='Assignments'
            component={ AssignmentScreen }
            options={{
                title: 'Asignaciones'
            }}
        />
        <Drawer.Screen
            name='Inventaries'
            component={ InventaryScreen }
            options={{
                title: 'Inventario'
            }}
        />
        <Drawer.Screen
            name='Scan'
            component={ ScanScreen }
            options={{
                title: 'Escanear'
            }}
        />
    </Drawer.Navigator>
  )
=======
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard, ArticleScreen, PersonScreen, LocationScreen, InventaryScreen, AssignmentScreen, ScanScreen } from '../screen'
const Drawer = createDrawerNavigator();

export const Drawernavigator = () => {
    return (
        <Drawernavigator>
            <Drawer.Screen name='Menu' component={Dashboard} options={{title:'Menu Principal'}}/>
            <Drawer.Screen name='Articles' component={ArticleScreen} options={{title:'Articulos'}}/>
            <Drawer.Screen name='Persons' component={PersonScreen} options={{title:'Personas'}}/>
            <Drawer.Screen name='Locations' component={LocationScreen} options={{title:'Ubicaciones'}}/>
            <Drawer.Screen name='Assigments' component={AssignmentScreen} options={{title:'Asignaciones'}}/>
            <Drawer.Screen name='Inventary' component={InventaryScreen} options={{title:'Inventarios'}}/>
            <Drawer.Screen name='Scan' component={ScanScreen} options={{title:'Escaner'}}/>
            

        </Drawernavigator>

    )
>>>>>>> Stashed changes
}