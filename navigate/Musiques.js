// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

// import CardItem from '../component/CardItem.js';

function MusiquesScreen({ navigation }) {

  const [musiques, setMusiques] = useState([]);

  useEffect(() => {
    const getMusiquesFromApi = async () => {
      try {
        const response = await fetch( 'https://greta-bibliotheque-jh.herokuapp.com/api/musiques' );
        const json = await response.json();
        setMusiques(json.musiques);
        console.log(json.musiques);
      } catch (error) {
        console.log(error);
      }
    }
  getMusiquesFromApi();
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