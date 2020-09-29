import React from 'react';
import ReactDOM from 'react-dom'
// import CreerCompte from './creerCompte/CreerCompte';
// import TraiteDmde from './traiteDmde/TraiteDmde';
// import CreerEmpl from './creerEmpl/CreerEmpl';
// import ModifInfos from './modifInfos/ModifInfos';
// import FormConges from './formulaireConges/FormConges';
// import PaieConges from './paieConge/PaieConges';
// import CreateProfile from './createProfil/CreateProfile';
// import NavBar from './navBar/NavBar';
// import Connexion from './connexion/Connexion';
import ListeEmploy from './listeEmploy/ListeEmploy';

const EMPLOYES = [
  {sexe: "F",name: "baba", pname: "lolita", number: "202 000 545 66", fonction: "admin IT", category: "A1"},
  {sexe: "F",name: "baba", pname: "lolita", number: "202 000 545 66", fonction: "admin IT", category: "A1"}
];


function App() {
  return (
    <div>
      <ListeEmploy employes={EMPLOYES} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
