import React, { Component } from 'react';
import {cameroonNumber, validateEmail} from '../Fonctions/functionNum';
// import NavBar from '../navBar/NavBar';
// import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './CreerCompte.css'

class CreerCompte extends Component {
  state={
    profil:'',
    fname:'',
    lname:'',
    number:'',
    mail:''
  }
  render() {
    return (
      <div>
  
        {/* <NavBar /> */}
  
      <div className="comptecontainer">
        <div className="menu1">
            <button type="button" className="men">Log in</button>
            <button type="button" className="men">Cancel</button>
        </div>
        
        <form className="compteform">
          <label htmlFor="profil">Profile:</label>
          <select 
            id="profil" 
            name="profile"
            onChange={e=>this.setState({profil:e.target.value})}
          >
            <option>Sudo Administrator</option>
            <option>HR manager</option>
            <option>General manager</option>
            <option>Aministrative board</option>
          </select>
          
          <div className="divformulaire">
            <label htmlFor="fname">First name</label>
            <input 
              type="text" 
              id="fname" 
              placeholder="Enter first name"
              onChange={e=>this.setState({fname:e.target.value})} 
            />
          
            <label htmlFor="lname">Last name</label>
            <input 
              type="text" 
              id="lname" 
              placeholder="Enter last name" 
              onChange={e=>this.setState({lname:e.target.value})}
            />
  
            <label htmlFor="number">Phone number</label>
            <input 
              type="text" 
              id="number" 
              placeholder="Enter phone number" 
              onChange={e=>this.setState({number:e.target.value})}
            />
          
            <label htmlFor="mail">E-mail address</label>
            <input 
              type="text" 
              id="mail" 
              placeholder="Enter e-mail address" 
              onChange={e=>this.setState({mail:e.target.value}, ()=>console.log(this.state))}

            />
            
            <input 
              type="submit" 
              className="comptebtn" 
              value="Save" 
              onClick={
                (e)=>{e.preventDefault()
                  console.log(this.state)
                  console.log(cameroonNumber("237657140183"))
                  console.log(validateEmail('lorr@gmail.com'))}
              }
            />
          </div>
          </form>
        </div>
      </div>
    );
  }

}

export default CreerCompte;
