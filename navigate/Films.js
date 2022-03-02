// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';

import CardList from '../component/CardList.js';
import SearchBox from "../component/SearchBox.js";

function FilmsScreen({ navigation}) {

const [films, setFilms] = useState([]);
const [searchField, setSearchField] = useState("");
const [searchFieldAuteur, setSearchFieldAuteur] = useState("");

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

  const onSearchChange = (value) => {
    //Mise à jour de searchField
    setSearchField(value);
  };

  const onSearchAuteurChange = (auteur) => {
    //Mise à jour de searchField
    setSearchFieldAuteur(auteur);
  };

  const filteredFilms = films.filter((film) =>
    film.titre.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredFilmsBis = filteredFilms.filter((film) =>
    film.auteur.toLowerCase().includes(searchFieldAuteur.toLowerCase())
  );

  const itemDeleteHandler = (deleteItemId) => {
    setFilms((prevFilms) =>
      prevFilms.filter((film) => film.id !== deleteItemId)
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
        oeuvres={films}
        // onDeleteItem={itemDeleteHandler}
        route="films"
      />
      <Button title="Accueil" onPress={() => navigation.push('Accueil')} />
    </View>
  );
  }

  export default FilmsScreen;