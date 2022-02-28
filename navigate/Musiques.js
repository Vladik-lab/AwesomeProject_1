// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

import CardList from '../component/CardList.js';

function MusiquesScreen({ navigation }) {

  const [musiques, setMusiques] = useState([]);

  useEffect(() => {
    const getMusiquesFromApi = async () => {
      try {
        const response = await fetch('https://greta-bibliotheque-jh.herokuapp.com/api/musiques');
        const json = await response.json();
        setMusiques(json.musiques);
        console.log(json.musiques);
      } catch (error) {
        console.log(error);
      }
    }
    getMusiquesFromApi();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <CardList
        oeuvres={musiques}
        // onDeleteItem={itemDeleteHandler}
        route="musiques"
      />
      <Button title="Accueil" onPress={() => navigation.push('Accueil')} />
    </View>
  );
}

export default MusiquesScreen;