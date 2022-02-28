// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

import cardList from '../component/card.js';

function MusiquesScreen({ navigation }) {

  useEffect(() => {
    const getMusiquesFromApi = async () => {
      try {
        const response = await fetch( 'http://localhost:5000/api/musiques' );
        const json = await response.json();
        return json.musiques;
      } catch (error) {
        console.log(error);
      }
    }
  //  getMusiquesFromApi();
  });

  // const renderMusiques = ({ item }) => {
  //   return (
  //     <Card px={5} py={2} rounded="md" bg="primary.300" my={2}>
  //       {item.title}
  //     </Card>
  //   );
  // };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Musiques</Text>
      <Button title="Accueil" onPress={() => navigation.push('Accueil')} />
    </View>
  );
}

export default MusiquesScreen;