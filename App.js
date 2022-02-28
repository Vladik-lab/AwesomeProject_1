import * as React from 'react';
// import { StyleSHeet, Button, View, Text } from 'react-native';
// import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Accueil from './navigate/Accueil.js';
import MusiquesScreen from './navigate/Musiques.js';
import FilmsScreen from './navigate/Films.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Accueil} 
        options={{ headerStyle: { backgroundColor: '#228CDB' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="Musiques" component={MusiquesScreen}
        options={{ headerStyle: { backgroundColor: '#228CDB' }, headerTintColor: '#fff'}} />
        <Stack.Screen name="Films" component={FilmsScreen}
        options={{ headerStyle: { backgroundColor: '#228CDB' }, headerTintColor: '#fff'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// headerRight: () => (<Icon name="plus" type="feather" color="#fff" style={style.headerIcon} />)

export default App;
