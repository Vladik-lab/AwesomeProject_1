// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

// import CardItem from '../component/CardItem.js';

function FilmsScreen({ navigation}) {

const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilmsFromApi = async () => {
      try {
        const response = await fetch( 'https://greta-bibliotheque-jh.herokuapp.com/api/films' );
        const json = await response.json();
        setFilms(json.films);
        console.log(json.films);
      } catch (error) {
        console.error(error);
      }
    }
  getFilmsFromApi();
  },[]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Text>Films</Text>
        <Button title="Accueil"onPress={() => navigation.push('Accueil')} />
      </View>
    );
  }

  export default FilmsScreen;