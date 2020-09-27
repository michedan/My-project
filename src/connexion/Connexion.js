import React, { Component } from 'react';
import user from '../images/user.png'
import './Connexion.css'

class Connexion extends Component{
	state={
		username:'',
		mdp:''
	}

	signin=()=>{
		/*
			Dans cette fonction, on vas: 
				1. preparer les donnees de connexion a envoyer a la base de donnes
				2. appeler l'API de connexion avec les donnes preparee
		*/

		//1. premiere partie ces donnees se trouve dans le state.
		//2. 
	}

	myFunction() {
		var x = document.getElementById("mdp");
		if (x.type === "password") {
		  x.type = "text";
		} else {
		  x.type = "password";
		}
	  }

	render(){
		return (
			<div className='loginContainer'>
				<div className="loginInbox">
					<img src={user} className="avatar" alt='user-avatar'/>
					<h1>Log in here</h1>
					<form>
						<label htmlFor='username'>Username</label>
						<input
							type="text"
							id='username'
							placeholder="Enter your username"
							onChange={e=>this.setState({username:e.target.value})}
						/>
						
						<label htmlFor='password'>Password</label>
						<input
							type="password"
							id='mdp'
							placeholder="Enter your password"
							onChange={e=>this.setState({mdp: e.target.value})}
						/>
						<input type="checkbox" onClick={this.myFunction} /> Show password
						
						<input
							type="submit"
							className="log"
							value="Log in"
							onClick={this.signin}
						/><br />
						
						{/* <a href="#">Lost your password?</a><br />
						<a href="#">Create an account?</a> */}
					</form>
				</div>
			</div>
		);

	}
}

export default Connexion;
