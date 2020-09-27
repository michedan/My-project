import React, { Component } from 'react';
// import NavBar from '../navBar/NavBar';
// import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import {cameroonNumber, validateEmail} from '../Fonctions/functionNum';
import './CreerEmpl.css'

class CreerEmpl extends Component {

	state={
		fname:'',
		lname:'',
		rnumber:'',
		fonct:'',
		category:'',	
		mstatus:'',
		hdate:'',
		cnumber:'',
		pnumber:'',
		mail:'',
		etatChoice1:'',
		etatChoice2:''
	}

	render(){
		return (
			<div>
				{/* <NavBar /> */}
				<div className="container">
				<form>
					<div className="menu1">
						<button type="button" className="men">Create</button>
						<button type="button" className="men">Modify</button>
						<button type="button" className="men">Delete</button>
						<button type="button" className="men">List</button>
						<button type="button" className="men">Cancel</button>
					</div>
					
					<div className="right">
					<label htmlFor="fname">First Name</label>
						<input 
							type="text" 
							id="fname" 
							className="fname" 
							placeholder="First name" 
							onChange={e=>this.setState({fname:e.target.value})}
						/><br/>

						<label htmlFor="lname">Last Name</label>
						<input 
							type="text" 
							id="lname" 
							className="lname" 
							placeholder="Last name"
							onChange={e=>this.setState({lname:e.target.value})} 
						/><br/>

						<label htmlFor="rnumber">Registration number</label>
						<input 
							type="text" 
							id="rnumber" 
							className="rnumber" 
							placeholder="Registration number" 
							onChange={e=>this.setState({rnumber:e.target.value})}
						/><br/>

						<label htmlFor="fonct">Fonction</label>
						<select 
							id="fonct" 
							name="fonction"
							onChange={e=>this.setState({fonct:e.target.value})}>
							<option>Admin RH</option>
							<option>DG</option>
							<option>Respo Appro</option>
						</select><br />

						<label htmlFor="catego">Category</label>
						<select 
							id="catego" 
							name="categorie"
							onChange={e=>this.setState({category:e.target.value})}>
							<option>A1</option>
							<option>A1</option>
							<option>A3</option>
						</select><br />
						<input 
							type="radio" 
							className="ainput" 
							id="etatChoice1" 
							name="ainput"
							value="active" 
							onChange={e=>this.setState({etatChoice1:e.target.value})}
						/>
						<label htmlFor="etatChoice1" className="lab1">Active</label>
					</div>
					
					<div className="left">
						<label htmlFor="mstatus">Marital status</label>
						<select 
							id="mstatus" 
							className="fselect" 
							name="profil"
							onChange={e=>this.setState({mstatus:e.target.value})}>
							<option>Single</option>
							<option>Married</option>
							<option>Divorce</option>
						</select><br />
			
					<label htmlFor="hname">Hiring date</label>
					<input 
						type="date" 
						id="hdate" 
						className="hdate" 
						placeholder="Hiring date" 
						onChange={e=>this.setState({hdate:e.target.value})}
					/><br/>

					<label htmlFor="cnumber">CNPS number</label>
					<input 
						type="text" 
						id="cnumber" 
						className="cnumber" 
						placeholder="CNPS number"
						onChange={e=>this.setState({cnumber:e.target.value})} 
					/><br/>

					<label htmlFor="pnumber">Phne number</label>
					<input 
						type="text" 
						id="pnumber" 
						className="pnumber" 
						placeholder="Phone number" 
						onChange={e=>this.setState({pnumber:e.target.value})}
					/><br/>

					<label htmlFor="mail">E-mail address</label>
					<input 
						type="text" 
						id="mail" 
						className="mail" 
						placeholder="E-mail address" 
						onChange={e=>this.setState({mail:e.target.value})}
					/>
					<input 
						type="radio" 
						className="iinput" 
						name="ainput"
						id="etatChoice2" 
						value="inactive"
						onChange={e=>this.setState({etatChoice2:e.target.value})}
					/>
					<label htmlFor="etatChoice2" className="lab2">Inactive</label>
					</div>
			
					<div className="save1">
						<input 
							type="submit" 
							className="btn"
							value="Save"
							onClick={(e)=>{e.preventDefault()
								console.log(this.state)
								console.log(cameroonNumber("237657140183"))
								console.log(validateEmail('lorr@gmail.com'))
							}}
						/>
					</div>
			
					</form>
				</div>
			</div>
		);
	}
  
}

export default CreerEmpl;
