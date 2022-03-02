// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

import CardList from '../component/CardList.js';
import SearchBox from "../component/SearchBox.js";

function MusiquesScreen({ navigation }) {

  const [musiques, setMusiques] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [searchFieldAuteur, setSearchFieldAuteur] = useState("");

  useEffect(() => {
    const getMusiquesFromApi = async () => {
      try {
        const response = await fetch('https://greta-bibliotheque-jh.herokuapp.com/api/musiques');
        const json = await response.json();
        setMusiques(json.musiques);
//        console.log(json.musiques);
      } catch (error) {
        console.log(error);
      }
    }
    getMusiquesFromApi();
  }, []);

  const onSearchChange = (value) => {
    //Mise à jour de searchField
    setSearchField(value);
  };

  const onSearchAuteurChange = (auteur) => {
    //Mise à jour de searchField
    setSearchFieldAuteur(auteur);
  };

  const filteredMusiques = musiques.filter((musique) =>
    musique.titre.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredMusiquesBis = filteredMusiques.filter((musique) =>
    musique.auteur.toLowerCase().includes(searchFieldAuteur.toLowerCase())
  );

  const itemDeleteHandler = (deleteItemId) => {
    setMusiques((prevMusiques) =>
      prevMusiques.filter((musique) => musique.id !== deleteItemId)
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>

      <Text>Rechercher:</Text>
      <View>
        <SearchBox 
          onSearch={onSearchChange} 
          message=" un titre" />
        <SearchBox
          onSearch={onSearchAuteurChange}
          message=" un auteur" />
      </View>

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