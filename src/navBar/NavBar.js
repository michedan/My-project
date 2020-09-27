import React from 'react';
import logo from '../images/logo.jpeg'
import './NavBar.css';

function NavBar() {
  return (
    <div class="naccontainer">
	<header class="headernav">
		<img src={logo} class="logo" width="50" height="50" alt="La réference pour vos finances"/>La réference pour vos finances!!!
		<nav class="navbar">
			<div class="selevtdiv">
			<label for="cars">Finances</label>
			<select class="fselect" name="profil">
				<option>Sudo Administrator</option>
				<option>HR manager</option>
				<option>General manager</option>
				<option>Aministrative board</option>
			</select>
				
			<label for="cars">Leave</label>
			<select class="lselect" name="profil">
				<option>Sudo Administrator</option>
				<option>HR manager</option>
				<option>General manager</option>
				<option>Aministrative board</option>
			</select>
				
			<label for="cars">Accounts</label>
			<select class="aselect" name="profil">
				<option>Sudo Administrator</option>
				<option>HR manager</option>
				<option>General manager</option>
				<option>Aministrative board</option>
			</select>
			</div>
		</nav>
    </header>
</div>

  );
}

export default NavBar;