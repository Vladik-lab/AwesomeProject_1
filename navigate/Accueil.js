import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Accueil({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Text>Accueil</Text>
        <Button title="Musiques" onPress={() => navigation.navigate('Musiques')} />
        <Button title="Films" onPress={() => navigation.navigate('Films')} />
      </View>
    );
  }

export default Accueil;