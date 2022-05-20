import React, {useEffect} from 'react';
import './App.css';
import {store} from "../../store/store";
import {loadAll} from "../../store/features/character/data/thunks/characters.thunk";
import {CharactersWrapper} from "../../pages/Characters/data-wrapper";

function App() {
  useEffect(() => {
    store.dispatch(loadAll());
  },[]);

  return (
    <CharactersWrapper></CharactersWrapper>
  );
}

export default App;
